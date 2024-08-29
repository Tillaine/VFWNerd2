import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AllStateItem from './components/AllStateItem'

const mockData = [
  {
  itemName: 'Membership',
  status: true, 
  required: true,
  description: "The post must have reached 102% of the previous year's membership by June 30, 2025. "
}, 
  {
  itemName: 'Service office',
  status: true, 
  required: true,
  description: "The post must donate to the Department of Colorado Service Office."
}, 
  {
  itemName: 'Voice of Democracy',
  status: true, 
  required: true,
  description: "The post must submit at least one VOD."
}, 
  {
  itemName: 'Patriots Pen',
  status: false, 
  required: true,
  description: "The post must submit at least one Patriots Pen."
}, 
  {
  itemName: 'All State Achievement Report',
  status: true, 
  required: true,
  description: "Auxiliaries and districts must complete tasks to earn points, submit the All State Report by the deadline, and have the report signed by the President, Secretary, and Treasurer. The report is available on the vfwco.org website and in the 2024-2025 Colorado Program Book."
}, 
  {
  itemName: 'Buy Poppies',
  status: true, 
  required: false,
  description: "Purchase Buddy Poppies."
}, 
  {
  itemName: 'Poppy Drive',
  status: false, 
  required: false,
  description: "Hold a poppy drive."
}, 
  {
  itemName: 'All State Achievement Report',
  status: true, 
  required: false,
  description: "Auxiliaries and districts must complete tasks to earn points, submit the All State Report by the deadline, and have the report signed by the President, Secretary, and Treasurer. The report is available on the vfwco.org website and in the 2024-2025 Colorado Program Book."
}, 
  {
  itemName: 'Program Chairs',
  status: false, 
  required: false,
  description: "Submitting a list of program chairmen to the Department Secretary."
}, 
  {
  itemName: 'Salute to Service',
  status: false, 
  required: false,
  description: "Nominating an Auxiliary member for Salute to Service."
}, 
  {
  itemName: 'Auxiliary Service',
  status: false, 
  required: false,
  description: "Having the Auxiliary complete a project, activity, or donation that benefits veterans by April 15 of the current year."
}, 
]

const ListItems = ( {items} ) => items.map( item => <AllStateItem {...item}/>)

const AllState = () => {
  return (
    <div className="App">
        <Box height='100%' bgcolor='primary.light'>
            <Typography variant="h1" >All State Checklist</Typography>
            <Box>
              <ListItems items={mockData} />
            </Box>
        </Box>
    </div>
  );
}

export default AllState;


// Membership
//  - The post must have reached 102% of the previous year's membership by June 30, 2025. 
// Service office
//  -The post must donate to the Department of Colorado Service Office. 
// Programs
//  - The post must submit at least one VOD, one Patriots Pen, and a donation to Veterans and Military Support (VMS) of at least $125. 
// All State Achievement Report
//  - Auxiliaries and districts must complete tasks to earn points, submit the All State Report by the deadline, and have the report signed by the President, Secretary, and Treasurer. The report is available on the vfwco.org website and in the 2024-2025 Colorado Program Book. 

// Other tasks that can earn bonus points include: 
// Purchasing Buddy Poppies 
// Holding a Poppy Drive 
// Submitting a list of program chairmen to the Department Secretary 
// Nominating an Auxiliary member for Salute to Service 
// Having the Auxiliary complete a project, activity, or donation that benefits veterans by April 15 of the current year