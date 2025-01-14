import { Container, Flex, Group, Title, Divider, TextInput, Text, SegmentedControl, Button, } from '@mantine/core';
import { info } from '@tauri-apps/plugin-log';
import { LayoutGrid, Package, Search, List } from 'lucide-react';
import { useState } from 'react';

export default function Inventory() {
  const [mode, setMode] = useState<string | undefined>(localStorage.getItem('InventoryDisplaySetting') || undefined);
  console.log(mode);

  const handleModeChange = (value: string) => {
    info(`localStorage value set to: ${value}`);
    setMode(value);
    localStorage.setItem('InventoryDisplaySetting', value);
  }

  return (
    <Container fluid w='100%' pt='md' className='inventory'>
      <Group justify='space-between'>
        <Flex align='end' gap='md'>
          <Package size='50px' />
          <Title order={1}>Inventario</Title>
        </Flex>
        <Group>
          <TextInput leftSection={<Search size='20px' />} w='15rem' />
          <Divider orientation='vertical' />
          <Button>Añadir</Button>
          <SegmentedControl
            value={mode}
            onChange={(e) => handleModeChange(e)}
            data={[{
              value: 'grid',
              label: (
                <Flex gap='xs' align='end'>
                  <LayoutGrid />
                  <Text>Grilla</Text>
                </Flex>
              )
            }, {
              value: 'list',
              label: (
                <Flex gap='xs' align='end'>
                  <List />
                  <Text>Lista</Text>
                </Flex>
              )
            }]}
          />
        </Group>
      </Group>
      <Divider my='md' />
    </Container>
  );
}
