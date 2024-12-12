import { Text, Center, Stack, Separator, HStack, Button, VStack, Flex, Image, Card } from "@chakra-ui/react";
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
                    <Card.Root width="800px" >
                        <Card.Body gap="2">
                            <Card.Title>Start Cooking, Start Creating</Card.Title>
                            <Card.Description>
                            Tired of scrolling through endless recipes? Our AI-powered chef simplifies your cooking experience. Get personalized recipes tailored to your taste, detailed nutritional information, and step-by-step visual guides to bring your dishes to life. It's like having a personal chef, right at your fingertips.
                            </Card.Description>
                        </Card.Body>
                    </Card.Root>
                </Center>

                <Center>
                <Button variant="surface"> Try our AI Chef</Button>
                </Center>
            </Stack>

            <br />
            <Flex gap="2" wrap="wrap" justify="center">
                <Image src={dosa} width="350px" rounded="lg"/>
                <Image src={idli} width="350px" rounded="lg"/>
                <Image src={gjamun} width="350px" rounded="lg"/>
                <Image src={biryani} width="350px" rounded="lg"/>
            </Flex>
        </div>
    );
}

export default Home;