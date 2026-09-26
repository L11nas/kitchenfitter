import CityPage from '../../components/CityPage';

export default function Nottingham() {
  return (
    <CityPage
      name='Nottingham'
      path='/nottingham'
      title='Kitchen Fitters in Nottingham | Kitchen Installation | S.L. Builders LTD'
      description='Nottingham-based kitchen fitters. S.L. Builders LTD installs kitchens and worktops in homes across Nottingham, from Arnold and Beeston to West Bridgford. Free consultation.'
      heading='Kitchen Fitters in Nottingham'
      banner='/assets/cities/nottinghamshire.jpg'
      bannerLabel='Modern fitted kitchen'
      intro={[
        'S.L. Builders LTD is based on the north side of Nottingham, so the city and its suburbs are where much of our work takes place. We fit new kitchens, replace worktops and improve layouts for homeowners who want a clean, long-lasting finish.',
        'Being local means we can visit your home, look at the space properly and agree a clear plan with you before any work starts.',
      ]}
      homesHeading='Kitchens for Every Type of Nottingham Home'
      homes={[
        'Nottingham has a real mix of housing, and each type needs a slightly different approach. Victorian and Edwardian terraces in areas such as Sherwood, Carrington and Forest Fields often have narrow kitchens where every centimetre of storage matters. Their walls are rarely perfectly straight, so worktops and end panels need careful scribing to sit tight against them.',
        'The 1930s semi-detached houses common in West Bridgford, Beeston and Mapperley usually allow for larger layouts, and many homeowners use a new kitchen as the chance to open up into a dining area. On newer estates around the city, the original builder-grade kitchens are often ready for an upgrade with better units, worktops and flooring.',
      ]}
      areasHeading='Areas We Cover Around Nottingham'
      areas={[
        'Arnold',
        'Beeston',
        'Bulwell',
        'Carlton',
        'Clifton',
        'Mapperley',
        'Sherwood',
        'West Bridgford',
        'Wollaton',
        'Hucknall',
      ]}
      areasNote='If your part of Nottingham is not listed, get in touch. We cover most of Greater Nottingham and the surrounding villages.'
      faqs={[
        {
          q: 'Are you based in Nottingham?',
          a: 'Yes. We are based on Annesley Road on the north side of Nottingham, so homes across the city and its suburbs are close to us.',
        },
        {
          q: 'What kitchen work do you carry out?',
          a: 'We handle full kitchen installations, including cabinet fitting, worktop installation, plumbing coordination, electrical preparation and finishing. We also replace units and worktops in existing kitchens and help with layout changes.',
        },
        {
          q: 'How do I get a quote?',
          a: 'Send us a message by SMS, WhatsApp or email with a short description of your project and a few photos of the room. We will get back to you to arrange a free consultation.',
        },
        {
          q: 'Can you help with other rooms as well?',
          a: 'Yes. Alongside kitchens we install flooring, renovate staircases, build outdoor decking and take on custom renovation work, so one team can cover several jobs in the same home.',
        },
      ]}
    />
  );
}
