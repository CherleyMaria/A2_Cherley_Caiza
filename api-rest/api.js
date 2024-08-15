const fastify = require('fastify')({ logger: true })

const ropa = [
    { id: 'C001', type: 'Camisa', brand: 'Zara', size: 'M', color: 'Blanco' },
    { id: 'C002', type: 'Pantalón', brand: 'Levi\'s', size: '32', color: 'Azul' },
    { id: 'C003', type: 'Vestido', brand: 'H&M', size: 'S', color: 'Negro' },
    { id: 'C004', type: 'Chaqueta', brand: 'North Face', size: 'L', color: 'Verde' },
    { id: 'C005', type: 'Zapatos', brand: 'Nike', size: '42', color: 'Gris' }
]

fastify.register(require('@fastify/cors'), {
  origin: '*',
  methods: ['GET'],
  allowedHeaders: ['Content-Type']
})

fastify.get('/clothing', async (request, reply) => {
  return ropa  
})

const start = async () => {
  try {
    await fastify.listen({ port: 5000 })
    console.log(`Servidor de ropa activo en http://localhost:5000`)  // Actualizado el mensaje
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()