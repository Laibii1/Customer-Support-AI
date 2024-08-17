
import { AlarmClockOff, ArrowDownNarrowWide, ArrowUpNarrowWide, LucideIcon } from "lucide-react";

interface IInfoCard {
    title:string;
    icon: LucideIcon;
    bodyText:string;
    id:number;
}

const infoCards: IInfoCard[] = [
    {
        title: "Instant Responses",
        bodyText: " NexBOT delivers real-time support, eliminating the wait time for customers and allowing them to get the help they need immediately",
        icon: ArrowUpNarrowWide,
        id: 1
    },
    {
        title: "24/7 Availability",
        bodyText: "With NexBOT, your customers can access support anytime, ensuring issues are resolved without delay, even outside of business hours.",
        icon: AlarmClockOff,
        id: 2
    },
    {
        title: "Efficient Query Resolution",
        bodyText: "  NexBOT intelligently prioritizes and addresses customer inquiries, reducing back-and-forth communication and speeding up the problem-solving process.",
        icon: ArrowDownNarrowWide,
        id: 3
    },
]

export default infoCards
