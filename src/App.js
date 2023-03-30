/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import Sidebar from './components/Sidebar.jsx'
import FooterStyled from './components/FooterStyled'
import HeaderStyled from './components/HeaderStyled'
import LastListened from './components/LastListened'
import Mixes from './components/Mixes'

function App () {
  return (
    <div className = "App">
      <HeaderStyled />
      <div className = "Main">
        <h1 className = "title"> Boa Tarde </h1>
        <div>
          <section>
          <LastListened />
          </section>
        </div>
        <h1 className = "title"> As tuas mixes mais ouvidas </h1>
        <section>
          <Mixes />
        </section>
        <h1 className = "title"> Feito para Brian Nicolas </h1>
        <section>
          <Mixes />
        </section>
        <h1 className = "title"> Reproduzidas recentemente </h1>
        <section>
          <Mixes />
        </section>
      </div>
      <Sidebar />
      <FooterStyled />
    </div>
  )
}

export default App
