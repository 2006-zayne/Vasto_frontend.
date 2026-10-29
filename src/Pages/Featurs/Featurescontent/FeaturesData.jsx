import imgGroup from '../../../assets/groups.jpeg'
import imgMessage from '../../../assets/message.jpeg'
import imgNotification from '../../../assets/notification.jpeg'

const CardDate = {
    DivOne:[
        {
            id:"card-1",
            type:"card",
            img:imgGroup,
            tittle:"Entertainment",
            text:"In Tailwind CSS, the height of an element is controlled using the  utility classes. These classes map directly to the CSS height property and follow a standardized spacing scale",
            paragraphWidth:"w-92"
        },
        {
            id:"card-2",
            type:"card",
            img:imgMessage,
            tittle:"Entertainment",
            text:"In Tailwind CSS, the height of an element is controlled using the  utility classes. These classes map directly to the CSS height property and follow a standardized spacing scale",
            paragraphWidth:"w-92"
        },
        {
            id:"card-3",
            type:"cardFull",
            img:imgNotification,
            tittle:"Entertainment",
            text:"In Tailwind CSS, the height of an element is controlled using the  utility classes. These classes map directly to the CSS height property and follow a standardized spacing scale",
            paragraphWidth:"w-150"
        }
    ],
    DivTwo:[
        {
            id:"card-1",
            type:"cardFull",
            img:imgGroup,
            tittle:"Entertainment",
            text:"In Tailwind CSS, the height of an element is controlled using the  utility classes. These classes map directly to the CSS height property and follow a standardized spacing scale",
            paragraphWidth:"w-150"
        },
        {
            id:"card-2",
            type:"card",
            img:imgMessage,
            tittle:"Entertainment",
            text:"In Tailwind CSS, the height of an element is controlled using the  utility classes. These classes map directly to the CSS height property and follow a standardized spacing scale",
            paragraphWidth:"w-92"
        },
        {
            id:"card-3",
            type:"card",
            img:imgNotification,
            tittle:"Entertainment",
            text:"In Tailwind CSS, the height of an element is controlled using the  utility classes. These classes map directly to the CSS height property and follow a standardized spacing scale",
            paragraphWidth:"w-92"
        }
    ]
}


const CardJsonData = JSON.stringify(CardDate)


export default CardJsonData