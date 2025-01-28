import { Box, Typography } from '@mui/material';

export default function NestedList({ responsibilities }) {
    return (
        <Box>
            {responsibilities.map((responsibility, idx) => {
                if (Array.isArray(responsibility)) {
                    // Nested list
                    return (
                        <Box key={idx} sx={{ marginLeft: 2 }}>
                            {responsibility.map((nestedItem, nestedIdx) => (
                                <Typography
                                    key={nestedIdx}
                                    align="left"
                                    variant="body3"
                                >
                                    • {nestedItem}
                                </Typography>
                            ))}
                        </Box>
                    );
                } else {
                    // Top-level item
                    return (
                        <Typography
                            key={idx}
                            align="left"
                            variant="body2"
                        >
                            - {responsibility}
                        </Typography>
                    );
                }
            })}
        </Box>
    )

}

