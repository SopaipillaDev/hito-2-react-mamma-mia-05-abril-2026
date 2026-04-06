const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      width: '300px',
      margin: '10px'
    }}>

      <img
        src={img}
        alt={name}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />

      <div style={{ padding: '15px' }}>

        <h3>Pizza {name}</h3>

        <p style={{ color: '#666', fontSize: '14px', marginTop: '8px' }}>
          Ingredientes:
        </p>
        <p style={{ fontSize: '14px' }}>
          🍕 {ingredients.join(', ')}
        </p>

        <p style={{ fontWeight: 'bold', margin: '10px 0' }}>
          Precio: ${price.toLocaleString('es-CL')}
        </p>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button>Ver Más »</button>
          <button>Añadir 🛒</button>
        </div>

      </div>
    </div>
  )
}

export default CardPizza