import * as React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const IndexPage = () => {
  const SILink = <Link to="https://www.spaceinchgames.com/">Space Inch</Link>
  return (
    <Layout>
      <div className="flex flex-row">
        <div className="bg-rhino w-96 h-96"></div>
        <h1 className="leading-[.7em] self-end">
          {' '}
          Ari <br />
          Kardasis{' '}
        </h1>
      </div>
      <div className="pt-12 max-w-2xl mx-auto">
        <p>
          I'm Ari Kardasis. I'm a software engineer with a long career spanning
          different sectors, roles, company stages and team sizes. I've been
          shoveling ones and zeros since the Clinton Administration and by now,
          I have a pretty good idea of what I'm doing. From mobile games to
          blockchain, startups to FAANG, consulting, foundering and IC
          engineering, I've worked on a huge array of products in all kinds of
          contexts.
        </p>
        <p>
          My path to tech was neither short nor straight. After majoring in math
          as an undergrad, I went on to tutor math and science to high school
          and college students. I spent a brief period as a professional chef
          before swerving again into architecture, which I studied first at
          Princeton and then MIT. At MIT, my love of the beep-boop arts was
          reignited in the CS department and at the Media Lab, where building
          physical things and digital things are the same thing. As I studied
          and used more electronics and digital systems, I began to find my way
          to software.
        </p>
        <p>
          My early consulting career included iOS apps, electromechanical
          prototypes, geometry consulting, portfolio websites and eCommerce.
          With one foot still in the architecture pool, I was teaching workshops
          to architects, specifically in technologies that allow for
          computationally generated forms. I advised on 3D printing projects and
          even built a delta-style 3D printer named Flagel. I was eager to learn
          and experiment with anything I could get my hands on.
        </p>
        <p>
          I took my first major break from consulting in 2013 to work on a{' '}
          {SILink}, a mobile gaming studio that I co-founded. In 2014, Make It
          Rain: The Love of Money shot to the #1 spot on the iTunes store and at
          the same time the company sold one of its games to a major game
          publisher. In the 4 years that Space Inch was active, the company
          accumulated over 50 million downloads. But with the games market flooded,
          Space Inch stopped making games in 2017 and I took another shot at
          foundering with The Ocean, a decentralized crypto exchange. Being too
          early to market is as bad as being too late and The Ocean shut down
          after a year and a half.
        </p>
        <p>
          Since then, I spent a year at AWS building a system to manage the
          compute resources for developer tooling. After getting over the utter
          system-shock of transitioning from a startup to enterprise, I worked
          with a small team to re-architect the infrastructure that AWS uses to
          allocate resources for CI/CD pipelines (build, test and deployment) as
          well as abstract that layer out to be usable across AWS for
          medium-length processes, like training an AI model.
        </p>
        <p>
          Now, I’m back to consulting because I’m passionate about getting the
          right skills to the right place at the right time. The breadth of my
          experience gives me a perspective on software that I didn’t have
          earlier in my career. I know more languages now than I did then, and I
          know all too well the ways that building software can go wrong. But
          what brings me back to consulting is knowing the ways that it can go
          right!
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
