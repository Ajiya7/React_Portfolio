import gitImage from '../assets/images/github_icon_image.png';
import gramImage from '../assets/images/instagram_icon_image.png';

function Footer() {   
    return (
        <footer class="Footer">
        <div class="Footer_container">
          <div class="Footer_container_up">
            <div class="Footer_social">
              <div class="Footer_social_heading">
                <h2>Social</h2>
              </div>
              <div class="Footer_social_links">
                <a target="_blank" rel="Github_link" href="https://github.com/Ajiya7"><img class="footer_icon_links" src={gitImage} alt="Faruk Ajiya Github Profile"/>
                </a>
                <a target="_blank" rel="Instagram_link" href="hhttps://www.instagram.com/_ajiya/"><img class="footer_icon_links" src={gramImage} alt="Faruk Ajiya Instagram Profile"/>
                </a>
              </div>
            </div>
            <div class="main_footer">
              <h2 class="main_footer_title">Faruk Ajiya</h2>
            </div>
           </div>
          <div class="main_footer_lower">
            © Copyright 2022. Made by Faruk Ajiya
          </div>
        </div>
    </footer>
    )
}

export default Footer;