import React from 'react';
import ProgramBoxes from './components/ProgramBoxes';
import './Programmes.css';
import { useInView } from 'react-intersection-observer';

export default function Programmes() {
  const [imageRef, imageInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [headingRef, headingInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [overviewRef, overviewInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [program1Ref, program1InView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [program2Ref, program2InView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [program3Ref, program3InView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [program4Ref, program4InView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [program5Ref, program5InView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [program6Ref, program6InView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [program7Ref, program7InView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [program8Ref, program8InView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [program9Ref, program9InView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [program10Ref, program10InView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [program11Ref, program11InView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [program12Ref, program12InView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [program13Ref, program13InView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div>
      <div className="programcontainer">
        <div ref={imageRef} className={`programm-png-image ${imageInView ? 'animate__animated animate__fadeIn' : ''}`}></div>
        <div ref={headingRef} className={`start-heading ${headingInView ? 'animate__animated animate__fadeIn animate__slow' : ''}`}>What Can You Do To Help ?</div>
        <div ref={overviewRef} className={`programmes-overview ${overviewInView ? 'animate__animated animate__fadeIn animate__slow' : ''}`}>
          Shifting our lifestyle and consumer choices is one way we can help address particular problems; getting politically active with our voices and votes can also help push for more systemic, widespread change. And one of the most effective ways to help realize a more sustainable future is to also support environmental nonprofits.
          <br /><br />
          However, since their operations run on donations and fundraisers, contributing financially and getting involved in whichever ways we are able to can really help to make a difference. In light of this, we put together this nonexhaustive list of 34 nonprofits you can check out and support for a sustainable future.
        </div>
        <div ref={program1Ref}
          className={`program ${program1InView ? 'animate__animated animate__fadeIn animate__slow ' : ''}`}>
          <ProgramBoxes id="earthjustice" program_title="Earthjustice" program_info="  Earthjustice is the United States’ largest environmental law organization, “because the earth needs a good lawyer.” Founded in the 1960s, Earthjustice attorneys have since supported various major environmental wins including the Clean Air Act and the Endangered Species Act. The organization works with activists, national politicians, international policymakers, and individuals to protect and strengthen laws for the benefit of people and a healthy planet" joinlink="https://earthjustice.org" />

        </div>
        <div ref={program2Ref} className={`program ${program2InView ? 'animate__animated animate__fadeIn animate__slow' : ''}`}>
          <ProgramBoxes id="a_growing_culture" program_title="A Growing Culture" program_info="The majority of food globally is produced by smallholder farmers and producers. A Growing Culture is a nonprofit focused on advancing a culture of farmer autonomy and agroecological innovation. They do this by 'reframing the way the world views farmers, facilitating collective learning and catalyzing innovation through farmer-to-farmer exchange, and supporting on-the-ground efforts for farmer-led research and documentation." joinlink="https://grndrmr.co/agrowingculture" />
        </div>
        <div ref={program3Ref} className={`program ${program3InView ? 'animate__animated animate__fadeIn animate__slow' : ''}`}>
          <ProgramBoxes id="WeForest" program_title="WeForest" program_info="WeForest is an NGO that was founded as a simple solution to global warming. The group works to empower communities and create sustainable, high standard, and scalable initiatives for reforestation. It believes that healthy forests are the best technology for removing carbon dioxide from the atmosphere and have built corporate and scientific partnerships to fund tree planting initiatives around the world."
            joinlink="https://www.weforest.org" />
        </div>


        <div ref={program4Ref} className={`program ${program4InView ? 'animate__animated animate__fadeIn animate__slow' : ''}`}>
          <ProgramBoxes id="National_Audubon_Society" program_title="National Audubon Society" program_info="The National Audubon Society is an American nonprofit conservation organization working to protect birds and the wild places they need to thrive. Originally founded in the 1890s in protest of the slaughter of waterbirds for luxury hats, the Audubon Society now has over 500 national chapters. Together, the society works to identify crucial bird habitats and collaborates with scientists, lawmakers, educators, and grassroots activists to shape its conservation efforts."
            joinlink="https://www.audubon.org" />
        </div>
        <div ref={program5Ref} className={`program ${program5InView ? 'animate__animated animate__fadeIn animate__slow' : ''}`}>
          <ProgramBoxes id="Cool_Effect" program_title="Cool Effect" program_info="Cool Effect is a 501(3)(c) nonprofit with a simple mission: to reduce carbon emissions. It combines science, expertise, and transparency to create communities invested in reducing carbon pollution. For example, its earliest project focused on helping communities transition to using clean-burning cookstoves. Through supporting various carbon-reducing endeavors, Cool Effect works to preserve natural habitats, implement clean energy programs, and improve the lives of rural communities."
            joinlink="https://www.cooleffect.org" />
        </div>
        <div ref={program6Ref} className={`program ${program6InView ? 'animate__animated animate__fadeIn animate__slow' : ''}`}>
          <ProgramBoxes id="Wildlife_Conservation_Society" program_title="Wildlife Conservation Society" program_info="The Wildlife Conservation Society (WCS) is a 501(3)(c) nonprofit dedicated to saving wildlife and wild places worldwide. The organization was originally founded in New York as the New York Zoological Society, promoting zoology and advancing wildlife protection. It has since rebranded and refocused its mission but continues to maintain its vision for thriving natural habitats and societies that value wildlife."
            joinlink="https://www.wcs.org/get-involved" />
        </div>
        <div ref={program7Ref} className={`program ${program7InView ? 'animate__animated animate__fadeIn animate__slow' : ''}`}>
          <ProgramBoxes id="Rainforest_Alliance" program_title="Rainforest Alliance" program_info="The Rainforest Alliance is a 501(c)(3) nonprofit building alliances to create a better future for people and planet. They offer a certification program for brands selling rainforest-friendly products and work alongside activists, businesses, small farmers, and forest communities to drive positive social, environmental, and economic change across forest landscapes."
            joinlink="https://www.wcs.org/get-involved" />
        </div>
        <div ref={program8Ref} className={`program ${program8InView ? 'animate__animated animate__fadeIn animate__slow' : ''}`}>
          <ProgramBoxes id="Jane_Goodall_Institute" program_title="Jane Goodall Institute" program_info="The Jane Goodall Institute is a nonprofit founded by the famous scientist to further her mission of saving chimpanzees from habitat destruction and trafficking. The scope of the institute’s work now encompasses broader nature conservation with a focus on wildlife. The Jane Goodall Institute engages with the global community to educate and inspire people to take collective action, and it also works with communities living in wild spaces to improve their lives through conservation efforts."
            joinlink="https://www.wcs.org/get-involved" />
        </div>
        <div ref={program8Ref} className={`program ${program8InView ? 'animate__animated animate__fadeIn animate__slow' : ''}`}>
          <ProgramBoxes id="Blue_Sphere_Foundation" program_title="Blue Sphere Foundation" program_info="Blue Sphere Foundation is a nonprofit working to safeguard the world’s oceans through action, activism, and art. Started by a global team of experts and activists, the organization seeks out the front lines of ocean conservation where they are able to gather information to turn into stories and visual assets that they then use to inspire action. Currently, it focuses on protecting diversity in West Papua, exposing overfishing of tuna around the world, and investing in scaling eco-tourism."
            joinlink="https://www.wcs.org/get-involved" />
        </div>
        <div ref={program9Ref} className={`program ${program9InView ? 'animate__animated animate__fadeIn animate__slow' : ''}`}>
          <ProgramBoxes id="SeaLegacy" program_title="SeaLegacy" program_info="
        SeaLegacy is a collective of photographers, filmmakers, and storytellers committed to creating healthy and abundant oceans for people and the planet. Founded by National Geographic photographer Paul Nicklen and pioneering conservation photographer Cristina Mittermeier, the organization leads visual storytellers on underwater expeditions and uses the power of visual storytelling to create change."
            joinlink="https://www.wcs.org/get-involved" />
        </div>
        <div ref={program10Ref} className={`program ${program10InView ? 'animate__animated animate__fadeIn animate__slow' : ''}`}>
          <ProgramBoxes id="Fibershed" program_title="Fibershed" program_info="
       Fibershed is a 501(3)(c) nonprofit re-envisioning a system of regional and regenerative fiber systems. It initially began in 2010 as a challenge by its founder, Rebecca Burgess, to only wear garments grown, dyed, and manufactured within 150 miles of her home. As Burgess began to work with local farmers and artisans, the project quickly became a movement that championed carbon farming and independent producers. Today, Fibershed dedicates itself to educating the public about the environmental benefits of decentralized textile systems, and also works to connect farmers, ranchers, and producers to each other and with end consumers."
            joinlink="https://www.wcs.org/get-involved" />
        </div>
        <div ref={program11Ref} className={`program ${program11InView ? 'animate__animated animate__fadeIn animate__slow' : ''}`}>
          <ProgramBoxes id="The_Soil_Association" program_title="The Soil Association" program_info="
        The Soil Association is a U.K.-based charity working with members to advocate for healthy, humane, and sustainable systems for food, farming, and land use. The group lobbies politicians, certifies sustainable products, and provides resources and education for both farmers and consumers in the food and fashion industries. Its current campaigns focus on regenerative farming, agroforestry, banning pesticides and dangerous antibiotics in the food supply chain, and making healthy, sustainable eating easier for everyone."
            joinlink="https://www.wcs.org/get-involved" />
        </div>
        <div ref={program12Ref} className={`program ${program12InView ? 'animate__animated animate__fadeIn animate__slow' : ''}`}>
          <ProgramBoxes id="Project_Drawdown" program_title="Project Drawdown" program_info="
        Project Drawdown is a nonprofit organization and group of scholars, scientists, entrepreneurs, and advocates around the globe who are collaborating to lay out a comprehensive plan to reverse global warming. Conclusions from its analysis show that we already have the tools to tackle climate change. In light of this, today, the group now focuses on educating people around the world and supporting initiatives that implement the effective tools identified from its research."
            joinlink="https://www.wcs.org/get-involved" />
        </div>
        <div ref={program13Ref} className={`program ${program13InView ? 'animate__animated animate__fadeIn animate__slow' : ''}`}>
          <ProgramBoxes id="One_Tree_Planted" program_title="One Tree Planted" program_info="
       One Tree Planted is a 501(c)(3) nonprofit based in Vermont that has a simple directive: one dollar = one tree. Founded in 2014 with a mission to make it easy for people to help the environment, One Tree Planted works together with reforestation organizations around the world to fund the planting of trees that help stabilize the climate, provide habitat for biodiversity, and create sustainable jobs."
            joinlink="https://www.wcs.org/get-involved" />
        </div>
      </div>
    </div>
    // </div>
  );
}
