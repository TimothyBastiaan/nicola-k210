

//% blockId=k210_nicola block="k210_nicola"
//%color="#228B22" 
namespace k210 
{
    let x = 100;
    let y = 100;
    let width = 150;
    let height = 40;
    /**
     * TODO: describe your function here
     * @param person describe parameter here, eg: 0
     */
    //% block
    export function nicola_face_reg (person: number): void {
        let _22 = ""
        let class_num = ""
        let opo = ""
        let face_Reg = 0
        opo = serial.readUntil(serial.delimiters(Delimiters.Hash))
        if (opo[0] == "$") 
        {
            class_num = "" + opo[1] + opo[2]
            _22 = opo[3]
            face_Reg = parseFloat("" + opo[4] + opo[5])
            if (class_num == "08") 
            {
                if (_22 == "Y")
                { 
                    if( face_Reg == person)
                    {   
                        x = parseFloat(opo.substr(6, 3));
                        y = parseFloat(opo.substr(9, 3));
                        width = parseFloat(opo.substr(12, 3));
                        height = parseFloat(opo.substr(15, 3));
                    }
                } 
            } 
        }
        else 
        {
            x =100;
            y = 100;
            width = 120;
            height = 40;
        }
        opo = ""
    }

    /**
     * TODO: return rounding box x value
     */
    //% block
    export function return_x() : number 
    {
        return x;
    }

    /**
     * TODO: return rounding box y value
     */
    //% block
    export function return_y(): number 
    {
        return y;
    }
    /**
     * TODO: return rounding box width value
     */
    //% block
    export function return_width(): number 
    {
        return width;
    }
    /**
     * TODO: return rounding box height value
     */
    //% block
    export function return_height(): number 
    {
        return height;
    }

}