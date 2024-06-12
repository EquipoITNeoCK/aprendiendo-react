import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

interface Pokemon {
  id: number;
  name: string;
  type: string;
  base_experience: number;
}

interface PokemonTableProps {
  data: Pokemon[];
}

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const PokemonTable: React.FC<PokemonTableProps> = ({ data }) => {
  return (
    <Paper>
      <Typography variant="h4" align="center" gutterBottom>
        Pokémon Table
      </Typography>
      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Base Experience</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((pokemon) => (
              <TableRow key={pokemon.id}>
                <TableCell>{pokemon.id}</TableCell>
                <TableCell>{pokemon.name}</TableCell>
                <TableCell>{pokemon.type}</TableCell>
                <TableCell>{pokemon.base_experience}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Paper>
  );
};

export default PokemonTable;
