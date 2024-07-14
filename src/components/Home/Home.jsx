import React from 'react'
import './Home.css'
import Boxes from './components/Boxes'
import News from './components/news'

export default function Main() {
  return (
    <div>
      <div className='image'>
        <div className="title">
          <div className="left">
            WEBCYCLE - <br />
            Make Future <br />
            Sustainable
          </div>
          <div className="right">
            “There must be a better way to make the things we want, <br />a way that doesn’t spoil the sky, or the rain or the land.”
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="sustainability">
          <strong> <p className='susp'>Sustainable Development</p></strong>
          <div className="content"> Sustainable development is an approach to growth and human development that aims to meet the needs of the present without compromising the ability of future generations to meet their own needs.  The aim is to have a society where living conditions and resources meet human needs without undermining planetary integrity</div>
          <strong><p className='susp'>Why ?</p></strong>
          <div className="content">
            Sustainable development practices help countries and businesses grow in ways that adapt to the challenges posed by climate change. This protects important natural resources for our current and future generations and allows communities to thrive. Governments around the world realize this and are starting to implement regulations that support sustainable development and hold private companies accountable for their actions. In the U.S., the SEC has proposed a law requiring publicly listed companies to disclose climate-related information, including greenhouse gas emissions. Additionally, the U.S. government is including aspects of social inclusion in new policies. For example, the recent Inflation Reduction Act (IRA) includes incentives and benefits for non-profit entities and low-income housing.
          </div>
          <div className="outside">
            <p className='goals'>Goals</p>
            <div className="allgoals">
              <Boxes id="poverty" title="#1 Poverty" text="End poverty in all its forms everywhere" link="https://sdgs.un.org/goals/goal1" />
              <Boxes id="health" title="#2 Health" text="Ensure healthy lives and promote well-being for all at all ages" link="https://sdgs.un.org/goals/goal3" />
              <Boxes id="sanity" title="#3 Sanitation" text="Ensure availability and sustainable management of water and sanitation for all" link="https://sdgs.un.org/goals/goal6" />
              <Boxes id="industry" title="#4 Industrial Development" text="Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation" link="https://sdgs.un.org/goals/goal9" />
              <Boxes id="hunger" title="#5 Zero Hunger" text="End hunger, achieve food security and improved nutrition and promote sustainable agriculture" link="https://sdgs.un.org/goals/goal2" />
              <Boxes id="edu" title="#6 Quality Education" text="Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all" link="https://sdgs.un.org/goals/goal4" />
              <Boxes id="eco" title="#7 Economic Growth" text="Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all" link="https://sdgs.un.org/goals/goal8" />
              <Boxes id="climate" title="#8 Climate" text="Take urgent action to combat climate change and its impacts" link="https://sdgs.un.org/goals/goal13" />
              <Boxes id="waterbody" title="#9 Aquatic Life" text="Conserve and sustainably use the oceans, seas and marine resources for sustainable development" link="https://sdgs.un.org/goals/goal14" />
            </div>
          </div>
        </div>
        <div className="latest">
          <div className="latestnews">Trending</div>
          <div className="allnews">
            <News id="plastic" info="Plastic industry among leading contributors to economy, provides huge job opportunities: Govt" link="https://economictimes.indiatimes.com/industry/indl-goods/svs/paper-/-wood-/-glass/-plastic/-marbles/plastic-industry-among-leading-contributors-to-economy-provides-huge-job-opportunities-govt/articleshow/111494421.cms" />
            <News id="climateimage" info="Climate change: Cos need some big changes on compliances India Inc's environmental compliance record..." link="https://economictimes.indiatimes.com/news/economy/indicators/climate-change-cos-need-some-big-changes-on-compliances/articleshow/110746000.cms" />
            <News id="solarcooking" info="Amid rising temperature Will India embrace Solar cooking again? As temperatures in India continue to rise, the idea of solar ...." link="https://economictimes.indiatimes.com/magazines/panache/amid-rising-temperatures-will-india-embrace-solar-cooking-once-again/articleshow/110634850.cms" />
            <News id="logicladder" info="Climate tech firm LogicLadder raises $2.5 million in funding from Big Capital, Rainmatter The company also expects allocate..." link="https://economictimes.indiatimes.com/tech/funding/climate-tech-firm-logicladder-raises-2-5-million-in-funding-from-big-capital-rainmatter/articleshow/110669815.cms" />
            <News id="aiandgrow" info="How AI and data can bring another green revolution in India. India faces environmental challenges in agriculture, but ..." link="https://economictimes.indiatimes.com/news/economy/agriculture/how-ai-and-data-can-bring-another-green-revolution-in-india/articleshow/109946518.cms" />
            <News id="greenjobs" info="Future of green jobs holds immense promise in India: Ramesh Alluri Reddy, TeamLease Degree Apprenticeship" link="https://economictimes.indiatimes.com/small-biz/sustainability/future-of-green-jobs-holds-immense-promise-in-india-ramesh-alluri-reddy-teamlease-degree-apprenticeship/articleshow/110520680.cms" />
            <News id="profitandsustain" info="Climate tech firm LogicLadder raises $2.5 million in funding from Big Capital, Rainmatter The company also expects allocate..." link="https://economictimes.indiatimes.com/jobs/c-suite/can-leaders-show-profitability-and-sustainability-together/articleshow/110416682.cms" />
            <News id="effi" info="Will AI Help or Hurt Sustainability? Yes AI has the potential to help address societal problems like climate change..." link="https://www.google.co.in/url?sa=t&source=web&rct=j&opi=89978449&url=https://sloanreview.mit.edu/article/will-ai-help-or-hurt-sustainability-yes/&ved=2ahUKEwjT7faTl6GHAxWbyzgGHVQ3DAEQxfQBKAB6BAgHEAE&usg=AOvVaw0AxyRXKwTreLkVDjR2UmV4" />
            <News id="windmill" info="DS Group launches #SaveTheFuture campaign on 'World Environment Day’ The campaign will run on various.." link="https://economictimes.indiatimes.com/small-biz/sustainability/ds-group-launches-savethefuture-campaign-on-world-environment-day/articleshow/110759481.cms" />
          </div>
        </div>
      </div>
    </div>
  )
}
