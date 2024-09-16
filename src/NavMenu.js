import React from 'react';
import './NavMenu.css';
import configuracoes from './configuracoes.png';
import ajuda from './ajuda.png';
import conexoes from './conexoes.png';
import facebook from './facebook.png';
import fechar from './fechar.png';
import logo from './logo.png';
import mapa from './mapa.png';
import tiktok from './tiktok.png';
import turismo from './turismo.png';
import wpp from './wpp.png';
import youtube from './youtube.png';
import logo2 from './cptm_logo.png';
import menu_hamburguer from './menu_hamburguer.png';

function NavMenu() {

    function menu() {
        if (document.getElementById('itens').style.display === 'block') {
            document.getElementById('itens').style.display = 'none';
        } else {
            document.getElementById('itens').style.display = 'block';
        }
    }
    return (
        <div>
            <nav className="Pai">
                <a className='Menu_Ham' onClick={menu}>
                    <img src={menu_hamburguer} alt="menu_ham" width={25} height={25}/>
                </a>
                <a href="https://www.google.com" className='Logo_CPTM'>
                    <img src={logo2} alt="logo_cptom" width={50} height={50} />
                </a>
                <p className='Linhas'>Linhas</p>
            </nav>
            <div id="itens" className='fundo_menu'>
                <nav className='nav_menu'>
                    <button>
                        <img src={configuracoes} alt="configuracoes" width={40} height={40}/>
                    </button>
                    <button>
                        <img src={logo} alt="Logo" width={40} height={40}/>
                    </button>
                    <button>
                        <img src={fechar} alt="Fechar" width={30} height={30}/>
                    </button>
                </nav>
                <hr />
                <main>
                    <button>
                        <img src={conexoes} alt="Conexões" width={380} height={50} />
                    </button>
                    <button>
                        <img src={mapa} alt="Mapa" width={380} height={50}/>
                    </button>
                    <button>
                        <img src={turismo} alt="Turismo" width={380} height={50}/>
                    </button>
                </main>
                <hr />
                <section id="ajuda">
                    <button>
                        <img src={ajuda} alt="Ajuda" width={180} height={50}/>
                    </button>
                </section>
                <footer className='redes_sociais'>
                    <button className='icone'>
                        <img src={wpp} alt="Wpp" width={40} height={40}/>
                    </button>
                    <button className='icone'>
                        <img src={youtube} alt="Youtube"width={40} height={40} />
                    </button>
                    <button className='icone'>
                        <img src={facebook} alt="Facebook" width={40} height={40}/>
                    </button>
                    <button className='icone'>
                        <img src={tiktok} alt="Tiktok" width={40} height={40}/>
                    </button>
                </footer>
            </div>
        </div>
    );

}
export default NavMenu;










// function Block() {
//     const [display, setDisplay] = React.useState('none');
//     setDisplay('block');

// return (
//     <div id="itens" className='fundo_menu' style={{ display }} onClick={Block}>
//         <nav className='nav_menu'>
//             <button>
//                 <img src={configuracoes} alt="configuracoes" width={40} height={40}/>
//             </button>
//             <button>
//                 <img src={logo} alt="Logo" width={40} height={40}/>
//             </button>
//             <button>
//                 <img src={fechar} alt="Fechar" width={30} height={30}/>
//             </button>
//         </nav>
//         <hr />
//         <main>
//             <button>
//                 <img src={conexoes} alt="Conexões" width={380} height={50} />
//             </button>
//             <button>
//                 <img src={mapa} alt="Mapa" width={380} height={50}/>
//             </button>
//             <button>
//                 <img src={turismo} alt="Turismo" width={380} height={50}/>
//             </button>
//         </main>
//         <hr />
//         <section id="ajuda">
//             <button>
//                 <img src={ajuda} alt="Ajuda" width={180} height={50}/>
//             </button>
//         </section>
//         <footer className='redes_sociais'>
//             <button className='icone'>
//                 <img src={wpp} alt="Wpp" width={40} height={40}/>
//             </button>
//             <button className='icone'>
//                 <img src={youtube} alt="Youtube"width={40} height={40} />
//             </button>
//             <button className='icone'>
//                 <img src={facebook} alt="Facebook" width={40} height={40}/>
//             </button>
//             <button className='icone'>
//                 <img src={tiktok} alt="Tiktok" width={40} height={40}/>
//             </button>
//         </footer>
//     </div>
// );
// }
// export default Block;

// function Menu() {
//     return (
//         <div id ="itens" className='fundo_menu'onClick={Block()} >
//             <nav className='nav_menu'>
//                 <button>
//                     <img src={configuracoes} alt="configuracoes" width={40} height={40}/>
//                 </button>
//                 <button>
//                     <img src={logo} alt="Logo" width={40} height={40}/>
//                 </button>
//                 <button>
//                     <img src={fechar} alt="Fechar" width={30} height={30}/>
//                 </button>
//             </nav>
//             <hr />
//             <main>
//                 <button>
//                     <img src={conexoes} alt="Conexões" width={380} height={50} />
//                 </button>
//                 <button>
//                     <img src={mapa} alt="Mapa" width={380} height={50}/>
//                 </button>
//                 <button>
//                     <img src={turismo} alt="Turismo" width={380} height={50}/>
//                 </button>
//             </main>
//             <hr />
//             <section id="ajuda">
//                 <button>
//                     <img src={ajuda} alt="Ajuda" width={180} height={50}/>
//                 </button>
//             </section>
//             <footer className='redes_sociais'>
//                 <button className='icone'>
//                     <img src={wpp} alt="Wpp" width={40} height={40}/>
//                 </button>
//                 <button className='icone'>
//                     <img src={youtube} alt="Youtube"width={40} height={40} />
//                 </button>
//                 <button className='icone'>
//                     <img src={facebook} alt="Facebook" width={40} height={40}/>
//                 </button>
//                 <button className='icone'>
//                     <img src={tiktok} alt="Tiktok" width={40} height={40}/>
//                 </button>
//             </footer>
//         </div>
//     );