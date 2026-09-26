import CityPage from '../../components/CityPage';

export default function Lincolnshire() {
  return (
    <CityPage
      name='Lincolnshire'
      path='/lincolnshire'
      areaType='AdministrativeArea'
      title='Kitchen Fitters in Lincolnshire | Lincoln, Grantham & Sleaford | S.L. Builders LTD'
      description='Kitchen fitting across Lincolnshire, including Lincoln, Grantham, Sleaford and Gainsborough. S.L. Builders LTD fits kitchens in cottages, bungalows and modern homes.'
      heading='Kitchen Fitters in Lincolnshire'
      banner='/assets/cities/lincolnshire.jpg'
      bannerLabel='Modern fitted kitchen'
      intro={[
        'S.L. Builders LTD fits kitchens for homeowners across Lincolnshire, from Lincoln and Grantham to the smaller market towns and villages. We handle everything from full kitchen installations to replacing worktops and units.',
        'We plan each kitchen around the property and the way you live, which matters in a county with so many different styles of home.',
      ]}
      homesHeading='Kitchens for Lincolnshire Properties'
      homes={[
        'Lincolnshire has many older cottages and farmhouses, where thick walls, uneven floors and walls that are far from square are common. Fitting a kitchen in these homes takes patience: units need careful levelling and worktops need to be scribed so everything sits neatly.',
        'The county also has a large number of bungalows, where a well-designed, easy-to-use kitchen is especially important. In Lincoln and Grantham there are Victorian terraces and modern estates too, each with their own layouts and opportunities for improvement.',
      ]}
      areasHeading='Areas We Cover in Lincolnshire'
      areas={[
        'Lincoln',
        'North Hykeham',
        'Grantham',
        'Sleaford',
        'Gainsborough',
        'Market Rasen',
        'Stamford',
        'Bourne',
      ]}
      areasNote='Lincolnshire is a large county, so please send us your location and we will confirm whether we can take on your project.'
      faqs={[
        {
          q: 'Which parts of Lincolnshire do you cover?',
          a: 'We cover Lincoln, Grantham, Sleaford, Gainsborough and nearby towns and villages. For other parts of the county, send us your location and we will let you know.',
        },
        {
          q: 'Can you fit a kitchen in an older cottage with uneven walls?',
          a: 'Yes. Older properties need extra care with levelling units and scribing worktops, and we allow for this when planning the installation.',
        },
        {
          q: 'How do I get a quote?',
          a: 'Send us a message by SMS, WhatsApp or email with your location, a short description of the job and a few photos of the room. We will get back to you to arrange a free consultation.',
        },
        {
          q: 'Do you offer other renovation work?',
          a: 'Yes. We also install flooring, renovate staircases, build decking and take on custom renovation projects.',
        },
      ]}
    />
  );
}
