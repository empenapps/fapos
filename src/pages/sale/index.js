import { useEffect, useState } from 'react';
import { useSelector} from 'react-redux';

// material-ui
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    TextField,
    Typography
} from '@mui/material';

// project import

// assets
import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import avatar1 from './../../assets/images/users/avatar-1.png';
import avatar2 from './../../assets/images/users/avatar-2.png';
import avatar3 from './../../assets/images/users/avatar-3.png';
import avatar4 from './../../assets/images/users/avatar-4.png';

import OrdersTable from './../dashboard/OrdersTable';
import IncomeAreaChart from './../dashboard/IncomeAreaChart';
import MonthlyBarChart from './../dashboard/MonthlyBarChart';
import ReportAreaChart from './../dashboard/ReportAreaChart';
import SalesColumnChart from './../dashboard/SalesColumnChart';
import MainCard from './../../components/MainCard';
import AnalyticEcommerce from './../../components/cards/statistics/AnalyticEcommerce';
import SaleTable from './SaleTable';
import Search from './Search';


// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};

// sales report status
const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Sale = () => {
    const [value, setValue] = useState('today');
    const [slot, setSlot] = useState('week');

    const product = useSelector((state) => state.product);

    console.log(product);
    


    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        {/* row 1 */}
        <Grid item xs={12} sx={{ mb: -2.25 }}>
            <Typography variant="h5">Sale</Typography>
            <br/>
            <Search />
        </Grid>

        <Grid item xs={12} md={7} lg={8}>

            <MainCard sx={{ mt: 2 }} content={false}>
                <SaleTable />
            </MainCard>

        </Grid>

        <Grid item xs={12} md={5} lg={4}>
               
                <MainCard sx={{ mt: 2 }} content={false}>
                    <Box sx={{ p: 2, pb: 2 }}>
                        <Stack spacing={2}>
                            <Button > SAVE ONLY </ Button>
                            <Button > PRINT ONLY </ Button>
                            <Button> SAVE & PRINT </ Button>
                        </Stack>
                    </Box>
                 
                </MainCard>
            </Grid>


        
        
    </Grid>
    );
};

export default Sale;
