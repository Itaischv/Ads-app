import { Box, Button } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { fetchEvents } from "../api/api";
import {useState, useEffect} from "react";

const DBResult = () => {
    
    const [events, setEvents] = useState([]);

    async function fetchData() {
        // You can await here
        return await fetchEvents();
    }

    async function fetchAndSetEvents() {
        return await fetchData().then((data) => setEvents(data))
    }

    useEffect(() => {
        fetchAndSetEvents();
    }, []);

    return(
        <div className={'pageContainer'}>
            <h2>Last 20 results from events table</h2>
            <p><Button size="small" variant="outlined" onClick={fetchAndSetEvents}>Fetch from psql DB</Button></p>
            <Box>
                <article>
                    {events && <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Event type</TableCell>
                                <TableCell>Ad Slot</TableCell>
                                <TableCell>Timestamp</TableCell>
                                <TableCell>Time on Page</TableCell>
                                <TableCell>Google Query ID</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {events.map((e) => (
                                <TableRow key={e.id}>
                                    <TableCell>{e.id}</TableCell>
                                    <TableCell>{e?.type}</TableCell>
                                    <TableCell>{e?.slot}</TableCell>
                                    <TableCell>{e?.timestamp}</TableCell>
                                    <TableCell>{e?.timeonpage + 's'}</TableCell>
                                    <TableCell>{e?.googlequeryid}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>}

                </article>
            </Box>
        </div>
    );
};

export default DBResult;
