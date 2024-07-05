import { JetBrains_Mono , Poppins} from "next/font/google";

const jetbrains_mono=JetBrains_Mono({
    subsets: ['latin'],
    weight:['300','500','600'],
    variable: '--font--jbmono',
})
const poppins=Poppins({
    subsets:['latin'],
    weight:['300','400','500'],
    variable: '--font--poppins',
})

export const jbmono= jetbrains_mono.variable;
export const poppin= poppins.variable;