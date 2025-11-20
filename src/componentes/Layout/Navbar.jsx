import '../../Css/NavbarModule.css'
import styles from "../../Css/NavbarModule.css";

function Navbar() {

  return (
    <>
    <nav className={styles.navbar}>
      <div className={styles.logo}>Meu Site</div>

      <ul className={styles.menu}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/empresa">Empresa</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
