import { Box, Text } from "@chakra-ui/react";

interface InfoProps {
  label:string
  value: number
}

export function Info({ label, value }: InfoProps) {
  return (
    <Box textAlign={['start', 'center']}>
      <Text fontSize={['lg', 'xl', '2xl', '3xl', '4xl', '5xl']} fontWeight="semibold" color="yellow.400">{value}</Text>
      <Text fontSize={['sm', 'md', 'lg', 'lg', 'xl']} fontWeight="semibold" color="gray.700">{label}</Text>
    </Box>
  )
}