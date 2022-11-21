import React from "react";
import Navbar from "../components/HeaderNoLogged";



const Lorem = () =>{
    return(
        <div>
            <Navbar/>
            <main className="aside">
              <aside className="aside"><h1>Lorem Ipsum</h1></aside>
              <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quos officia aliquam placeat at corporis incidunt animi velit deserunt. Earum totam consectetur vitae sapiente est repellat aliquam ipsum dolore odio.</p>
              <p className="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id urna interdum, finibus nulla in, tempus tortor. Curabitur mollis sagittis nulla vitae vulputate. Sed in justo in tortor dictum aliquet id ac nulla. Proin ipsum tellus, placerat sit amet condimentum id, pretium et tellus. Suspendisse pretium maximus velit in malesuada. Vestibulum cursus vestibulum dolor eget sollicitudin. Aenean condimentum dictum tortor, et hendrerit eros tincidunt id.
                Nullam porttitor eget odio at cursus. Suspendisse rutrum, nibh non euismod porttitor, libero nisi facilisis libero, quis vehicula enim erat auctor erat. Ut consectetur sagittis leo, sed maximus nisi suscipit non. Donec sed arcu sit amet odio egestas fermentum sit amet sed sem. Morbi eros orci, faucibus a lorem vel, suscipit posuere ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam ac elit a nulla commodo pulvinar. Sed sit amet luctus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In sed libero eget elit porttitor sagittis. Nunc egestas ipsum non quam interdum consequat. Nam et felis et turpis pulvinar viverra non quis tortor. Integer venenatis arcu ut commodo scelerisque. Curabitur hendrerit tempus sapien.
                Morbi auctor, orci ut faucibus sagittis, ipsum nibh maximus nibh, quis convallis risus nulla vel lectus. Pellentesque laoreet justo volutpat orci mattis pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla et eros ipsum. Aenean finibus vestibulum efficitur. Cras accumsan massa elementum tincidunt mattis. Etiam id volutpat odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc euismod neque nec diam cursus, et lacinia nisl tristique. Donec rutrum turpis magna, id imperdiet tortor tincidunt in. Suspendisse ut augue ut justo tristique mollis.
                Maecenas vitae purus semper, pretium tortor a, mollis mauris. Nulla facilisi. Vivamus risus lectus, rhoncus at enim eu, sollicitudin pulvinar sem. Donec ac tellus viverra, accumsan enim sed, ullamcorper lectus. Aliquam commodo, neque vel consectetur fringilla, leo est sodales nisl, sit amet vestibulum magna purus in dolor. Fusce vehicula ultrices massa, et scelerisque quam scelerisque et. Quisque mattis, lectus non volutpat rhoncus, magna arcu dapibus mauris, et sollicitudin libero libero rhoncus tortor. Nulla mauris urna, consequat at placerat quis, eleifend ac nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus urna sit amet quam consequat pellentesque. Nulla mollis hendrerit bibendum.
                Sed rutrum mauris leo, ut ornare magna porttitor at. Donec arcu sapien, consequat ut fringilla nec, cursus ut tellus. Vivamus non erat maximus, bibendum ex sit amet, interdum tellus. Nullam elit enim, lobortis at faucibus vel, viverra sed est. Nam tempor faucibus metus, id vehicula elit rhoncus at. Praesent tincidunt ligula vulputate ante aliquet tempus. Aenean urna sapien, consequat in tincidunt sed, pellentesque in nunc. Nam lorem nisl, dapibus fermentum tristique quis, suscipit in eros. Proin pretium mauris sed luctus eleifend. </p>
            </main>
            <aside className="aside">
              <h1 className="p">Music video</h1>
              <iframe src="https://www.youtube.com/embed/KS76EghdCcY" title="The Lorem Ipsum Song (Song A Day #1649)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen width={709} height={399} frameBorder={0} />
            </aside>
        </div>
    );
}

export default Lorem;