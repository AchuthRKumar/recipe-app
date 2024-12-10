import { Image, Card, Button, Center } from "@chakra-ui/react";
import Dosa from "../assets/Dosa.jpg"
function Foodcard(){
    return(
      <div>
          <Card.Root maxW="sm" size="sm" overflow="hidden" rounded="lg" style={{ textAlign: 'justify'}}>
                <Image src={Dosa} alt="Dosa" />
                <Card.Body gap="2">
                    <Card.Title>Dosa</Card.Title>
                    <Card.Description>Dosa is a thin, crispy Indian crepe made from fermented batter, often served with sambar and chutney.</Card.Description>
                </Card.Body>
                <Center>
                <Card.Footer>
                    <Button variant="solid"> Cook Now</Button>
                </Card.Footer>
                </Center>
                
          </Card.Root>
      </div>  
    );
}
export default Foodcard;