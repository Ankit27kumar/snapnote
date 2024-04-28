import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <div className='footer'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <p className='fodetail'> Cutting-edge manufacturer of economical and efficient smart home automation systems.</p>
                    <a className='socialhandle'  href="https://www.linkedin.com/company/99300762/admin/feed/posts/"  target="_blank"><FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a  className='socialhandle'  href="https://www.instagram.com/skai_future_is_here/"  target="_blank"><FontAwesomeIcon icon={faSquareInstagram} /></a>
                    
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <h4 className='fotitle'>ABOUT US</h4>
                    <ul>
                   <li> <Link className='folink' href="#home">Home</Link></li>
                   <li><Link className='folink' href="#home">Features</Link></li>
                   <li> <Link className='folink' href="#team">Team</Link></li>
                   <li> <Link className='folink'  href="#achieve">Achievement</Link></li>
                   <li> <Link  className='folink' href="#contact">Contact</Link></li>
                    </ul>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                <h4 className='fotitle'>HELP & INFO HELP</h4>
                <ul>
                   <li> <Link className='folink' href="#home">Track your order</Link></li>
                   <li><Link className='folink' href="#home">returns policies</Link></li>
                   <li> <Link className='folink' href="#team">Shipping + Delivery</Link></li>
                   <li> <Link className='folink'  href="#achieve">Contacts us</Link></li>
                   <li> <Link  className='folink' href="#contact">FAQS</Link></li>
                    </ul>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                <h4 className='fotitle'>our Products</h4>
                <ul>
                   <li> <Link className='folink' href="#home">Speak Me</Link></li>
                   
                    </ul>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <p className='fotitle'> Partners</p>
                </Grid>
            </Grid>
        </div>
    )
}
export default Footer;