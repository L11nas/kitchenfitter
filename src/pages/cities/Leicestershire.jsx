import CityPage from '../../components/CityPage';

export default function Leicestershire() {
  return (
    <CityPage
      name='Leicestershire'
      path='/leicestershire'
      areaType='AdministrativeArea'
      title='Kitchen Fitters in Leicestershire | Leicester & Loughborough | S.L. Builders LTD'
      description='Kitchen fitting in Leicester, Loughborough, Hinckley, Melton Mowbray and across Leicestershire. S.L. Builders LTD installs kitchens, worktops and flooring.'
      heading='Kitchen Fitters in Leicestershire'
      banner='/assets/cities/leicestershire.jpg'
      bannerLabel='Modern fitted kitchen'
      intro={[
        'S.L. Builders LTD fits kitchens in homes across Leicestershire, including Leicester, Loughborough and the surrounding towns and villages. We carry out full kitchen installations as well as smaller upgrades such as new worktops or replacement units.',
        'Our aim is simple: a kitchen that is fitted accurately, works well for your household and still looks good years from now.',
      ]}
      homesHeading='Kitchen Fitting in Leicestershire Homes'
      homes={[
        'Leicester has many Victorian terraces, particularly in areas such as Clarendon Park, Westcotes and Belgrave. Their kitchens are often long and narrow, sometimes with a rear extension, and a good layout can turn them into a far more practical space.',
        'In Oadby, Wigston and Birstall there are plenty of interwar and post-war semis that suit larger kitchen and dining layouts, while market towns such as Melton Mowbray, Market Harborough and Ashby-de-la-Zouch mix older character homes with newer developments. Each property needs a slightly different approach to planning and fitting.',
      ]}
      areasHeading='Areas We Cover in Leicestershire'
      areas={[
        'Leicester',
        'Loughborough',
        'Oadby',
        'Wigston',
        'Hinckley',
        'Coalville',
        'Melton Mowbray',
        'Market Harborough',
        'Ashby-de-la-Zouch',
      ]}
      areasNote='If your town is not listed, send us your location and we will confirm whether we can help.'
      faqs={[
        {
          q: 'Which areas of Leicestershire do you cover?',
          a: 'We cover Leicester, Loughborough and the surrounding towns listed above. For other locations, get in touch and we will let you know.',
        },
        {
          q: 'Can you make better use of a long, narrow terrace kitchen?',
          a: 'Yes. Long, narrow kitchens are common in Leicester terraces, and careful planning of units, appliances and worktops can make them much more practical.',
        },
        {
          q: 'How do I get a quote?',
          a: 'Send us a message by SMS, WhatsApp or email with a few details and photos of your kitchen, and we will get back to you to arrange a free consultation.',
        },
        {
          q: 'Can you help with flooring or stairs as well?',
          a: 'Yes. We also install flooring, renovate staircases, build decking and take on custom renovation projects.',
        },
      ]}
    />
  );
}
