import { PlusIcon } from "@heroicons/react/16/solid"
import CircularButton from "../atoms/CircularButton"
import Container from "../atoms/Container"
import CardHeader from "../molecules/CardHeader"
import MainCardContent from "../molecules/MainCardContent"
import { getPallette, getRandom } from "../utils/styleUtils"

const WorkExperienceCard = () => {
    const pallette = getPallette({})

    return (
        <Container
            customStyles={{
                backgroundColor: pallette.backgroundColor,
                height: getRandom({ min: 200, max: 600 })
            }}
        >
            <CardHeader rightActions={
                <CircularButton customStyles={{ backgroundColor: pallette.color, height: "2rem", width: "2rem" }}>
                    <PlusIcon className="text-lg" stroke={pallette.backgroundColor} fill={pallette.backgroundColor} />
                </CircularButton>
            } />
            <MainCardContent
                contentImage={<div>Image Here</div>}
                contentLabel={<div className="font-antiqua text-4xl" style={{ color: pallette.color }}>
                    Work Experience
                </div>
                }
            />
        </Container>
    )

}

export default WorkExperienceCard