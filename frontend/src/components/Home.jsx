import { Text, Center, Stack, Separator, HStack, Button, VStack, Flex, Image } from "@chakra-ui/react";
import dosa from "../assets/Dosa.jpg"
import idli from "../assets/Idli.jpg"
import biryani from "../assets/Biryani.jpg"
import gjamun from "../assets/GulabJamun.jpg"

function Home(){
    return (
        <div>
            <Stack gap="4"> 
                <Center>
                    <Text textStyle="2xl">Find recipes for...</Text>
                </Center>

                <HStack gap="5">
                    <Separator />
                    <Text textStyle="4xl" fontWeight="semibold" className="tangerine-font" flexShrink="0">Good Food  .  Good Health  .  Good Life</Text>
                    <Separator />
                </HStack>

                <Center>
                <VStack gap="4">
                <Text textStyle="xl">AI-Powered Recipes, Crafted for You !</Text>
                <Button variant="surface"> Try our AI Chef</Button>
                </VStack>
                </Center>  
            </Stack>
            
            <Flex gap="4" wrap="wrap" justify="center">
                <Image src={dosa} width="350px"/>
                <Image src={idli} width="350px"/>
                <Image src={gjamun} width="350px"/>
                <Image src={biryani} width="350px"/>
            </Flex>
        </div>
    );
}

export default Home;