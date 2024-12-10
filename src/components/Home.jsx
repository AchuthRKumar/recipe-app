import { Text, Center, VStack, } from "@chakra-ui/react";

function Home(){
    return (
        <div>
            <Center>
            <VStack>
                <Text textStyle="2xl">Find recipes for...</Text>
                <Text textStyle="4xl" fontWeight="semibold" className="tangerine-font" >Good Food  .  Good Health  .  Good Life</Text>
            </VStack>            
            </Center>
            
        </div>
    );
}

export default Home;