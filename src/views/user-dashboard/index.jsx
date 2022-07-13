import { Box, Container, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react'


const Dashboard = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={2}>
                {
                    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((item, index) => {
                        return (
                            <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
                                <Box key={index} width={210} marginRight={0.5} my={5}>
                                    <Box pt={0.5}>
                                        <Skeleton animation="wave" variant="circle" width={40} height={40} />
                                        <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />

                                        <Skeleton variant="rect" width={210} height={118} />
                                        <Skeleton />
                                        <Skeleton width="60%" />
                                    </Box>
                                </Box>
                            </Grid>
                            
                        )
                    })
                }
                
            </Grid>
        </Container>
    )
}


export default Dashboard;