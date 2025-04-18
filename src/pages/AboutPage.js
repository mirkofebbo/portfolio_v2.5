import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';

const About = () => {
    const [csvData, setCsvData] = useState([]);
    const typeOrder = ["FORMATION", "CONTRACT", "FREELANCE", "EXHIBITION", "CONFERENCE", "AWARD", "GRANT", "VOLUNTEER", "PRESS"];
    useEffect(() => {
        fetch('/data/CV.csv')
            .then(response => response.text())
            .then(data => {
                const parsedData = Papa.parse(data, { header: true });
                setCsvData(parsedData.data);
            })
            .catch(error => console.error('Error loading CSV:', error));
    }, []);

    const groupedData = csvData.reduce((acc, row) => {
        const type = row["Type"];
        if (!acc[type]) acc[type] = [];
        acc[type].push(row);
        return acc;
    }, {});

    Object.keys(groupedData).forEach(type => {
        groupedData[type].sort((a, b) => parseInt(b["start date"]) - parseInt(a["start date"]));
    });

    const cv = ({ groupedData, type }) => {
        let role = "Role"
        let employer = "Employer"
        if (type === "FORMATION") {
            role = "Degree"
            employer = "Institution"
        } else if (type === "VOLUNTEER") {
            role = "Role"
            employer = "Organization"
        } else if (type === "AWARD") {
            role = "Award"
            employer = "Institution"
        }
        return (
            <Box key={type} sx={{ width: '100%', marginBottom: '2rem' }}>
                <Box borderRadius={2} sx={{ 
                    backgroundColor: 'primary.dark',
                    }}>
                    <Typography variant="h2" >{type}</Typography>
                </Box>
                <TableContainer component={Paper} sx={{ maxHeight: '70vh', width: '100%' }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>Start Date</TableCell>
                                <TableCell>End Date</TableCell>
                                <TableCell>{role}</TableCell>
                                <TableCell>{employer}</TableCell>
                                <TableCell>Location</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {groupedData[type].map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row["start date"]}</TableCell>
                                    <TableCell>{row["end date"]}</TableCell>
                                    <TableCell>{row["Role"]}</TableCell>
                                    <TableCell>{row["Employer"]}</TableCell>
                                    <TableCell>{row["Location"]}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        );
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <Typography variant="h1" gutterBottom>About</Typography>
            {typeOrder
                .filter(type => groupedData[type]) // only include types present in data
                .map((type) => (
                    cv({ groupedData, type })
                ))
            }
        </Box>
    );
}

export default About;