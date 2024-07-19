

function Footer() {
  

  return (
    <div className="bg-background-green block md:flex py-8">
        <p className="text-big-green text-lg md:text-5xl font-extrabold px-8 float-left justify-center content-center text-center">&copy; 2024 TERRANOM</p>

        <div className="block px-8 md:px-16 md:ml-auto">
            <a href="mailto:terranominfo@gmail.com"><p className="text-small-green text-lg">Terranominfo@gmail.com</p></a>
            <div className="flex md:content-center md:justify-center">
                <a target="_blank" href="https://x.com/terranom18829"><img src="/img/x_twitter.png" className="h-11 m-2"></img></a>
                <a target="_blank" href="https://www.instagram.com/terranom_canada?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img src="/img/instagram.png" className="h-11 m-2"></img></a>
                <a target="_blank" href="https://www.linkedin.com/company/terranom?trk=public_post_reshare_feed-actor-image"><img src="/img/linkedin.png" className="h-11 m-2"></img></a>
            </div>
        </div>
    </div>
  );
}

export default Footer;
