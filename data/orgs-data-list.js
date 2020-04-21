const orgsData = [
    {
        id: 'gimmeShelter',
        name: 'Gimme Shelter',
        image: 'Gimme-Shelter.png',
        address: 'Gimme Shelter Portland P.O. Box 15319 Portland, OR 97293',
        phone: 'contact@gimmeshelterportland.org',
        link: 'https://www.gimmeshelterportland.org/',
        donationLink: 'n/a',
        description: 'Our serious activism in shelter animal welfare issues began after we sold our small business in Portland and suddenly had the time to follow the fates of the hundreds of thousands of animals who end up at Multnomah County Animal Services every year.',
        descriptionShort: 'Animal shelter',
        category: 'animal rights',
        donationTypes: ['volunteer']
    }, {
        id: 'multnomahAnimalServices',
        name: 'Multnomah County Animal Services',
        image: 'multnomah-county-animal-services.png',
        phone: '(503) 988-7387 ',
        link: 'https://multcopets.org/',
        donationLink: 'https://multcopets.org/donate-online',
        description: `Multnomah County Animal Service's mission is to protect the health, safety and welfare of animals and people in Multnomah County. That mission includes: Dealing with animal nuisance complaints. Helping animal owners through our lost-and-found services to reunite them with their pets.`,
        descriptionShort: `Services Limited: Adoptions suspended. Critical services for stray animals, emergency owner surrenders, call center services, and emergency field services are available.`,
        category: `animal rights`,
        donationTypes: ['monetary', 'food supplies', 'basic care', 'volunteer', 'foster program']
    }, {
        id: 'navajoHopiRelief',
        name: 'Navajo Hopi Families Covid Relief',
        image: 'Navajo-Hopi-Families-CovidRelief.jpg',
        phone: 'n/a',
        Link: 'https://www.gofundme.com/f/NHFC19Relief',
        donationLink: 'https://www.gofundme.com/f/NHFC19Relief',
        description: `Navajo and Hopi Families Covid 10 Relief fund`,
        descriptionShort:`Navajo and Hopi Families Covid 10 Relief fund`,
        category: `social advocacy`,
        donationTypes: [`monetary`]
    }, {
        id: 'passYourCheck',
        name: 'Pass Your Check', 
        image: 'pass-your-check.png',
        phone: `(503) 231-3969`,
        link: `https://www.passyourcheckpdx.org/`,
        donationLink: `https://www.passyourcheckpdx.org/pyc`,
        description: `PYCPDX is asking you to pass your stimulus check to a family that won’t be getting one. We work with our vetted Community Connectors who have relationships with undocumented families to ensure that 100% of the funds you donate will go directly into the pockets of undocumented families in Multnomah County.`,
        descriptionShort: `Delivers stimulus aid to undocumented individuals and families who have been disproportionately affected by the COVID-19 pandemic.`,
        category: `social advocacy`,
        donationTypes: [`monetary`, `backpacks`, `basic needs supplies`, `volunteer`, `monthly gift and purchases`],
    }, {
        id: 'pdxMutalAid',
        name: 'PDX Mutal Aid',
        image: 'PDX-Mutal-Aid.png',
        phone: 'n/a',
        link: `https://www.instagram.com/pdxcovid19mutualaid/`,
        donationLink: `https://www.gofundme.com/f/pdx-covid19-mutual-aid-network-fundraiser`,
        description: `Portland based - Coordinating mutual aid responses for those impacted by COVID-19.`,
        descriptionShort: `Coordinating mutual aid responses for those impacted by COVID-19.`,
        category: `social advocacy`,
        donationTypes: [`monetary`]
    }, {
        id: 'roseHavenShelter',
        name: `Rose Haven Women's Shelter`,
        image: `Rose-Haven-Womens-Shelter.png`,
        phone: `(503) 248-6364`,
        link: `https://rosehaven.org/`,
        donationLink: `https://rosehaven.org/helping/donate-supplies/`,
        description: `Rose Haven will be continuing to offer services. They will be serving meals from 9 am-noon M-F as well as offering supplies. They are letting a limited number of people in at a time for their restrooms. Services include: Food, water, emergency clothing, diapers, wipes, hygiene products, mail service, pet food, bathrooms and sink usage, outdoor supplies including tents, tarps, sleeping bags (as supplies last), additional direct service allocations for rental and utility assistance.`,
        descriptionShort: `Rose Haven is a day shelter and community center serving women, children and gender-diverse people experiencing the trauma of abuse, loss of home and other disruptive life challenges.`,
        category: `social advocacy`,
        donationTypes: [`monetary`, `backpacks`, `basic needs supplies`, `volunteer`, `monthly gift and purchases`]
    }, {
        id: 'rosewoodInitiative',
        name: `Guerreras Latinas COVID-19 Relief`,
        image: `rosewood-initiative.jpg`,
        phone: `(503) 208-2562`,
        link: `https://www.rosewoodinitiative.org/`,
        donationLink: `https://charity.gofundme.com/o/en/campaign/guerreras-latinas-covid-19-relief-fund1?fbclid=IwAR0pWAMmROjIifzaPWGKiwXp1N2oPGVWEe4DwD5jACu131KOBLK0qtEbG98`,
        description: `A Latina support and empowerment group that helps participants become more self-reliant and confident in their daily lives, develop leadership skills, and form connections to better their lives.Those supported will not be receiving a stimulus check, and this group provides basic needs and care to those affected in the Rosewood Neighborhood.`,
        descriptionShort: `A Latina support group working to provide basic necessities to those affected within the Rosewood neighborhood that are ineligible for the stimulus check.`,
        category: `social advocacy`,
        donationTypes: [`monetary`]
    }, {
        id: `snowCap`,
        name: `SnowCap Community Charities`,
        image: `snow-cap.jpg`,
        phone: `(503) 674-8785`,
        link: `http://www.snowcap.org/`,
        donationLink: `https://app.etapestry.com/onlineforms/SnowCapCommunityCharities/COVIDResponseSupport.html`,
        description: `The purpose of SnowCap was to discover the real needs in the area, communicate them, and assist residents, churches, and community leaders to meet those needs individually and cooperatively. The organization adopted a philosophy that "SnowCap will cross lines of race, religion, national origin, and economic status, hoping to coordinate and act as a barometer, correcting conditions which call for improvement."`,
        descriptionShort: `Addresses the real needs in the area, communicates them, and assists residents, churches, and community leaders to meet those needs individually and cooperatively.`,
        category: `food bank / shelter`,
        donationTypes: [`monetary`, `food supplies`]
    }, {
        id: `tips`,
        name: `Service Industry Tips`,
        image: `tips.jpeg`,
        phone: 'n/a',
        link: `https://serviceindustry.tips/en/pre-login/?next=https://app.serviceindustry.tips/en/signup/`,
        donationLink: `https://serviceindustry.tips/en/pre-login/?next=https://app.serviceindustry.tips/en/signup/`,
        description: `If you work in Portland in the food & beverage industry, or if your income is largely tip based, you are eligible to register with ServiceIndustry.tips. Complete this form and you may receive random tips from random members of the public who would otherwise be patronizing your services.`,
        descriptionShort: `Addresses the loss of supplemental income/income alltogether service workers are experiencing in Portland due to lay-offs and job loss.`,
        category: `service / artist funds`,
        donationTypes: [`monetary`]
    }, {
        id: `pdxArtistRelief`,
        name: `Portland Area Artist Emergency Relief Fund`,
        phone: 'n/a',
        image: 'place-holder.png',
        link: `https://www.pdxartistrelief.com/`,
        donationLink: `https://www.pdxartistrelief.com/about`,
        category: `service/ artist funds`,
        donationTypes: [`monetary`],
    }, {
        id: 'blanchetHouse',
        name: `Blanchet House`,
        image: `Blanchet-House.png`,
        phone: `(503) 241-4340`,
        link: `https://blanchethouse.org/`,
        donationLink: `https://blanchethouse.org/donate/`,
        description: `Blanchet (pronounced Blan-shay) House is a nonprofit social services organization located in downtown Portland. We provide food, clothing and housing programs to people in need. We believe that it is our responsibility to offer assistance in whatever way we can. We are not affiliated with any religious organizations though our founders are rooted in the Catholic community.`,
        descriptionShort: `A non-profit social services organization providing food, clothing and housing programs to those in need`,
        category: `food bank/ shelter`,
        donationTypes: [`monetary`, `volunteer`]
    }, {
        id: 'join',
        name: 'JOIN',
        image: 'join.png',
        phone: `(503) 232-2031`,
        link: `https://joinpdx.org/`,
        donationLink: `https://joinpdx.org/donate/`,
        description: `JOIN exists to support the efforts of individuals and families experiencing homelessness to transition into permanent housing. Our efforts are directed at individuals sleeping outside or in their car in the Portland Metro area. Our service provision is not dependent on age, gender, race, ethnicity, faith, culture, language, sexual identity, specific diagnosis, or identifiable issue.`,
        descriptionShort: `A non-profit that aims to provide a plethora of support to people experiencing homelessness from food to housing support.`,
        category: `food bank/ shelter`,
        donationTypes: [`monetary`, `basic needs supplies`]
    }, {
        id: 'ohs',
        name: 'Oregon Humane Society',
        image: `ohs.png`,
        phone: `(503) 285-7722`,
        link: `https://www.oregonhumane.org/`,
        donationLink: `https://www.oregonhumane.org/donate/`,
        description: `OHS is the largest humane society in the Northwest, and adopts more animals from its Portland shelter than any other single-facility shelter on the West Coast. OHS puts no time limits on how long animals remain at the shelter—a pet stays available for adoption for as long as needed to find a loving home. If a pet in the care of OHS needs medical attention, the OHS veterinary hospital provides the pet with same level of care you would want your own pet to receive.`,
        descriptionShort: `A no-kill shelter in pursuit of rehoming and saving animals across the Portland Metro area.`,
        category: `animal rights`,
        donationTypes: [`monetary`, `volunteer`]
    }, {
        id: 'oregonPubHouse',
        name: 'Oregon Public House',
        image: 'oph.png',
        phone: '(503)828-0884',
        link: 'https://www.oregonpublichouse.com/',
        donationLink: 'https://www.gofundme.com/f/help-oph-get-through-covid19-closure?utm_medium=copy_link&utm_source=customer&utm_campaign=p_lico+share-sheet',
        description: `When customers purchase their food and/or beverage they have a chance to vote for how our donation should be given from a list of local charities. We've simply positioned ourselves to be the "fundraising department" for these charitable organizations, by providing the community with great food and great beer in a warm, inviting environment.`,
        descriptionShort: `A bar that donates proceeds to local non-profits.`,
        cateogry: 'service/ artist funds',
        donationTypes: ['monetary']
    }
];

export default orgsData;