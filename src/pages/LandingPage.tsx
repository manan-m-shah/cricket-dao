import React from 'react'
import Typewriter from 'typewriter-effect'

const TypewriterSection = () => {
  return (
    <Typewriter
      options={{ loop: true }}
      onInit={(typewriter) => {
        typewriter
          .typeString('Welcome to the best sports dao')
          .pauseFor(1000)
          .deleteAll()
          .typeString('The cricketing world in your hands')
          .pauseFor(1000)
          .deleteAll()
          .typeString('Test')
          .pauseFor(1000)
          .start()
      }}
    />
  )
}

const LandingPageFirstSection = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-slate-900">
      <div className="">
        <h1 className="text-center text-6xl text-gray-200">Cricket DAO</h1>
        <h3 className="p-10 text-center text-4xl text-gray-200">
          <TypewriterSection />
        </h3>
        <div className="flex items-center justify-center">
          <button className="rounded-xl bg-gray-200 p-4">Launch App</button>
        </div>
      </div>
    </div>
  )
}

const Section = ({
  img,
  title,
  description,
  flip,
}: {
  img: string
  title: string
  description: string
  flip: boolean
}) => {
  if (flip) {
    return (
      <div className="grid h-screen w-screen grid-rows-2 bg-white p-6 md:grid-cols-2 md:grid-rows-1">
        <div className="flex h-full flex-col items-center justify-center">
          <h1 className="px-10 font-mono text-6xl text-gray-600">{title}</h1>
          <h3 className="px-10 text-2xl text-gray-600">{description}</h3>
        </div>
        <img
          src={img}
          alt="image"
          className="w-[80%] self-center justify-self-center bg-auto"
        />
      </div>
    )
  } else {
    return (
      <div className="px- grid h-screen w-screen grid-rows-2 bg-white p-6 md:grid-cols-2 md:grid-rows-1">
        <img
          src={img}
          alt="image"
          className="w-[80%] self-center justify-self-center bg-auto"
        />
        <div className="flex h-full flex-col items-center justify-center">
          <h1 className="px-10 font-mono text-6xl text-gray-600">{title}</h1>
          <h3 className="px-10 text-2xl text-gray-600">{description}</h3>
        </div>
      </div>
    )
  }
}

const LandingPage = () => {
  return (
    <div className="bg-white">
      <div>
        <LandingPageFirstSection />
        <Section
          img="/images/vote.png"
          title="What is the Decentraland DAO?"
          description='DAO stands for "Decentralized Autonomous Organization". The Decentraland DAO owns the most important smart contracts and assets that make up Decentraland – the LAND Contract, the Estates Contract, Wearables, Content Servers and the Marketplace. It also owns a substantial purse of MANA which allows it to be truly autonomous as well as subsidize various operations and initiatives throughout Decentraland.'
          flip={false}
        />
        <Section
          img="/images/people.png"
          title="Why has the DAO been created? How is it relevant to me?"
          description="Decentraland is the first fully decentralized virtual world. It was always part of the original vision to hand over control to the people who create and play in this virtual space. In short – you, the users. Through the DAO, you are in control of the policies created to determine how the world behaves: for example, what kinds of wearable items are allowed (or disallowed) after the launch of the DAO, moderation of content, LAND policy and auctions, among others."
          flip={true}
        />
        <Section
          img="/images/tokens.png"
          title="How does the DAO work?"
          description="The community will propose and vote on policy updates, future LAND auctions, whitelisting of NFT contracts to be allowed inside the World, Builder and Marketplace, and whatever the community deems relevant. Voting takes place on the Decentraland DAO's governance interface, powered by Aragon."
          flip={false}
        />
        <Section
          img="/images/vote.png"
          title="What kinds of things will you get to determine?"
          description="Figure Out"
          flip={true}
        />
      </div>
    </div>
  )
}

export default LandingPage
