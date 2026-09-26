import CityPage from '../../components/CityPage';

export default function Doncaster() {
  return (
    <CityPage
      name='Doncaster'
      path='/doncaster'
      title='Kitchen Fitters in Doncaster | Kitchen Installation | S.L. Builders LTD'
      description='Kitchen fitters covering Doncaster, Bessacarr, Bawtry, Armthorpe and Rossington. S.L. Builders LTD installs new kitchens, worktops and flooring. Free consultation.'
      heading='Kitchen Fitters in Doncaster'
      banner='/assets/cities/doncaster.webp'
      bannerLabel='Modern fitted kitchen'
      intro={[
        'S.L. Builders LTD installs kitchens for homeowners in Doncaster and the surrounding towns and villages of South Yorkshire. From replacing a dated kitchen to fitting a completely new layout, we focus on precise work and a tidy, professional finish.',
        'We take time to understand how you use your kitchen, so the layout, storage and worktop space work for your household day to day.',
      ]}
      homesHeading='Kitchen Fitting Across Doncaster'
      homes={[
        'Doncaster has a wide range of homes. Victorian and early 20th-century terraces around Hyde Park, Balby and Hexthorpe often have narrow kitchens, where a well-planned galley or L-shaped layout gives the most usable space.',
        'Areas such as Bessacarr, Cantley and Sprotbrough have many larger semi-detached and detached houses with room for islands, breakfast bars and bigger appliances. In the former mining villages, including Armthorpe, Rossington and Edlington, and on the newer estates around the town, homeowners often want to modernise a basic kitchen with better units, worktops and flooring.',
      ]}
      areasHeading='Areas We Cover Around Doncaster'
      areas={[
        'Bessacarr',
        'Cantley',
        'Balby',
        'Wheatley',
        'Sprotbrough',
        'Armthorpe',
        'Rossington',
        'Bawtry',
        'Tickhill',
        'Thorne',
      ]}
      areasNote='If you are elsewhere in the Doncaster area, send us your location and we will confirm whether we can help.'
      faqs={[
        {
          q: 'Do you cover Doncaster and the surrounding villages?',
          a: 'Yes. Doncaster and the nearby towns and villages are part of our service area. We agree the plan and timings with you before work begins.',
        },
        {
          q: 'Can you replace just the worktops or units?',
          a: 'Yes. As well as full installations, we can replace worktops, swap out units or change part of a layout in an existing kitchen.',
        },
        {
          q: 'How do I get a quote?',
          a: 'Send us a message by SMS, WhatsApp or email with a few details and photos of your kitchen, and we will get back to you to arrange a free consultation.',
        },
        {
          q: 'Do you also fit flooring?',
          a: 'Yes. We install wooden, laminate and vinyl flooring, and fitting it at the same time as a new kitchen gives a consistent, clean finish.',
        },
      ]}
    />
  );
}
