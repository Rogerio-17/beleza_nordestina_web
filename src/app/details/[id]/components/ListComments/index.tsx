import { Avatar, Flex, Grid, GridItem, Text } from '@chakra-ui/react'

export function ListComments() {
    return (
        <>
            <Text>Todos os comentarios:</Text>
            <Grid templateColumns="repeat(2, 1fr)" justifyContent="space-between" gap="2rem">
                <GridItem display="flex" alignItems="center" gap="0.6rem">
                    <Flex flexDirection="column">
                        <Avatar name="Rogerio Jose" />
                        <Text fontSize="0.875rem">Rogério</Text>
                    </Flex>
                    <Flex border="1px solid #dbd7d7" p="8px" borderRadius="8px">
                        Estou encantada com essa máscara facial! Minha pele ficou visivelmente mais
                        hidratada e radiante após o primeiro uso. A textura é suave e o aroma é
                        maravilhoso. Definitivamente vou incorporar esse produto na minha rotina de
                        cuidados.
                    </Flex>
                </GridItem>

                <GridItem display="flex" alignItems="center" gap="0.6rem">
                    <Flex flexDirection="column">
                        <Avatar name="Jennyfer Louyse" />
                        <Text fontSize="0.875rem">Jennyfer</Text>
                    </Flex>
                    <Flex border="1px solid #dbd7d7" p="8px" borderRadius="8px">
                        Esse sérum é incrível! Notei uma diferença significativa nas minhas linhas
                        finas e na firmeza da pele em apenas duas semanas. A absorção é rápida e não
                        deixa a pele oleosa. Estou muito satisfeita com os resultados!
                    </Flex>
                </GridItem>
            </Grid>
        </>
    )
}
