import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'my-table-cmcaiza1',
  styleUrl: 'my-table-cmcaiza1.css',
  shadow: true,
})
export class ResponsiveTable {
  @Prop() apiUrl: string;
  @State() data: any[] = [];
  @State() keys: string[] = [];
  @State() error: string = '';

  async componentWillLoad() {
    if (!this.apiUrl) {
      this.error = 'API URL is required';
      return;
    }

    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) throw new Error(`Network error: ${response.status}`);

      const result = await response.json();
      const processedData = Array.isArray(result) ? result : [result];

      if (processedData.length > 0) {
        this.keys = this.extractKeys(processedData[0]);
        this.data = processedData;
      } else {
        this.error = 'The data format cannot be recognized';
      }
    } catch (error) {
      this.error = `Error when retrieving data: ${error.message}`;
    }
  }
  
  // `extractKeys` es una función recursiva que extrae las claves de los objetos, incluyendo claves anidadas.
  extractKeys(item: any, prefix = ''): string[] {
    return Object.keys(item).flatMap(key => 
      typeof item[key] === 'object' && item[key] !== null
        ? this.extractKeys(item[key], `${prefix}${key}.`)
        : `${prefix}${key}`
    );
  }

  getValueByPath(item: any, path: string): any {
    return path.split('.').reduce((acc, key) => acc[key], item);
  }

  render() {
    if (this.error) return <div class="error">{this.error}</div>;
    if (!this.data.length) return <div>No hay datos disponibles</div>;

    return (
      <table>
        <thead>
          <tr>
            {this.keys.map(key => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.data.map(item => (
            <tr>
              {this.keys.map(key => <td>{this.getValueByPath(item, key)}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
