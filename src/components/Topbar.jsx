import { Text, Input, HStack, Center, Link } from "@chakra-ui/react"
import { InputGroup } from "../components/ui/input-group"
import { FaBowlFood } from "react-icons/fa6";

function Topbar() {
    return(
        <div>
            <Center>
                <HStack gap="7">
                    <Link href="#">Home</Link>
                    <Link href="#">About</Link>
                    <Text textStyle="6xl" margin="5px" className="tangerine-font"> Get Cooking </Text>
                    <Link href="#">Recipes</Link>
                    <Link href="#">Shop</Link>
                </HStack>
            </Center>
            <Center>
                <InputGroup startElement={<FaBowlFood/>}>
                    <Input placeholder="Search for a Dish or Ingredient" width="300px" variant="flushed" />
                </InputGroup>
            </Center>
        </div>
    );
}

export default Topbar;