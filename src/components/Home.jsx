import Header from './Header'
import CardPizza from './CardPizza'

const Home = () => {
  return (
    <div>

      {/* Header con imagen de fondo */}
      <Header />

      {/* Sección de pizzas */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '30px'
      }}>

        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img="../../public/pizza-mamma-mia.png"
        />

        <CardPizza
          name="Española"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img="../../public/pizza-mamma-mia.png"
        />

        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img="../../public/pizza-mamma-mia.png"

		  />
      </div>
    </div>
  )
}

export default Home