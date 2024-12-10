import { HStack, Link, Stack, Text } from "@chakra-ui/react";

function Footer(){
    return (
        <div >
            <HStack gap="40">
            <Text className="tangerine-font" textStyle="4xl">Get Cooking</Text>
            <Stack gap="0">
                <Link href="#">Breakfast</Link>
                <Link href="#">Lunch</Link>
                <Link href="#">Dinner</Link>
                <Link href="#">Occassions</Link>
            </Stack>
            <Stack gap="0">
                <Link href="#">About Us</Link>
                <Link href="#"> Kitchen Essentials</Link>
            </Stack>
            </HStack>
        </div>
    );
}

export default Footer;