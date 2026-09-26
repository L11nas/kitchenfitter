import CityPage from '../../components/CityPage';

export default function Hucknall() {
  return (
    <CityPage
      name='Hucknall'
      path='/hucknall'
      areaType='Place'
      title='Kitchen Fitters in Hucknall | Local Kitchen Installation | S.L. Builders LTD'
      description='Local kitchen fitters based on Annesley Road, Hucknall. S.L. Builders LTD fits kitchens, worktops and flooring in Hucknall, Linby, Papplewick and nearby villages.'
      heading='Local Kitchen Fitters in Hucknall'
      banner='/assets/cities/hucknall.webp'
      bannerLabel='Modern fitted kitchen'
      intro={[
        'Hucknall is our home town. S.L. Builders LTD is based on Annesley Road, so for homeowners in Hucknall and the nearby villages we are genuinely local kitchen fitters.',
        'We fit complete kitchens, replace tired units and worktops, and carry out related renovation work, with the same team looking after your project from the first visit to the final check.',
      ]}
      homesHeading='Kitchen Fitting for Hucknall Homes'
      homes={[
        'Hucknall grew as a mining town, and many streets near the town centre are lined with terraced houses from that era. Their kitchens tend to be compact, so the focus is on clever storage, well-planned corner units and a layout that makes the most of a small footprint.',
        'Further out, the post-war semis and the newer housing estates on the edges of town offer more room to work with. Here many homeowners want to replace a dated or basic kitchen with something more modern, often with new flooring fitted at the same time for a consistent finish.',
      ]}
      areasHeading='Areas We Cover Around Hucknall'
      areas={[
        'Hucknall town centre',
        'Butler’s Hill',
        'Linby',
        'Papplewick',
        'Bestwood Village',
        'Annesley',
        'Kirkby-in-Ashfield',
        'Bulwell',
        'Eastwood',
      ]}
      areasNote='Being based in Hucknall, we can easily reach the surrounding villages and the north of Nottingham.'
      faqs={[
        {
          q: 'Where in Hucknall are you based?',
          a: 'We are based on Annesley Road in Hucknall, which makes it easy for us to visit homes in the town and nearby villages.',
        },
        {
          q: 'Can you work in a small terraced kitchen?',
          a: 'Yes. Compact kitchens are common in Hucknall, and we plan the layout carefully to make the best use of the space, including storage, worktop length and where appliances go.',
        },
        {
          q: 'How do I arrange a visit?',
          a: 'Send us a message by SMS, WhatsApp or email with a few details and photos of your kitchen, and we will get back to you to arrange a free consultation.',
        },
        {
          q: 'Do you only fit kitchens?',
          a: 'No. We also install flooring, renovate staircases, build decking and take on custom renovation projects around the home.',
        },
      ]}
    />
  );
}
