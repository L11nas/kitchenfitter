import CityPage from '../../components/CityPage';

export default function Leeds() {
  return (
    <CityPage
      name='Leeds'
      path='/leeds'
      title='Kitchen Fitters in Leeds | Kitchen Installation & Renovation | S.L. Builders LTD'
      description='Kitchen fitting in Leeds for terraces, period homes and modern houses. S.L. Builders LTD installs kitchens in Headingley, Roundhay, Horsforth, Morley and across Leeds.'
      heading='Kitchen Fitters in Leeds'
      banner='/assets/cities/leeds.webp'
      bannerLabel='Modern fitted kitchen'
      intro={[
        'S.L. Builders LTD fits kitchens for homeowners across Leeds and West Yorkshire. Whether you are replacing an old kitchen or planning a full renovation, we focus on accurate installation, practical layouts and a finish that lasts.',
        'Every project starts with a conversation about your space and how you use it, so the kitchen we fit suits your home rather than a standard template.',
      ]}
      homesHeading='Fitting Kitchens in Leeds Homes'
      homes={[
        'Leeds is known for its terraced housing, including the back-to-back and through terraces found in areas such as Harehills, Burley and Armley. These homes usually have small or galley-style kitchens, where tall units, slim appliances and careful planning make a big difference to how much storage and worktop space you get.',
        'In Headingley, Chapel Allerton and Roundhay there are many larger Victorian and Edwardian houses with high ceilings and generous rooms, which suit taller wall units and island or peninsula layouts. The 1930s semis and newer estates around Horsforth, Morley, Rothwell and Garforth are well suited to open-plan kitchen and dining spaces.',
      ]}
      areasHeading='Areas We Cover Around Leeds'
      areas={[
        'Headingley',
        'Chapel Allerton',
        'Roundhay',
        'Horsforth',
        'Morley',
        'Pudsey',
        'Rothwell',
        'Garforth',
        'Wetherby',
        'Beeston',
      ]}
      areasNote='We also take on projects in other parts of Leeds and West Yorkshire. Send us your location and we will let you know.'
      faqs={[
        {
          q: 'You are based in Nottingham. Do you really cover Leeds?',
          a: 'Yes. Although our base is in Nottingham, Leeds and the surrounding area are part of our service area. We agree the plan and timings with you before any work starts, so you know exactly what to expect.',
        },
        {
          q: 'Can you fit a kitchen in a back-to-back or terraced house?',
          a: 'Yes. Smaller kitchens need careful planning, and we work out the best use of the space for units, appliances and worktops before fitting begins.',
        },
        {
          q: 'How do I get a quote for a kitchen in Leeds?',
          a: 'Send us a message by SMS, WhatsApp or email with your location, a short description of the job and some photos of the room. We will get back to you to arrange a free consultation.',
        },
        {
          q: 'What else can you do while you are there?',
          a: 'We also install flooring, renovate staircases, build decking and take on custom renovation work, which can be planned alongside your kitchen.',
        },
      ]}
    />
  );
}
