const ARISTAS = [
    ["c01", "c05"], // Blinding Lights ↔ Starboy
    ["c01", "c17"], // Blinding Lights ↔ Save Your Tears
    ["c05", "c17"], // Starboy ↔ Save Your Tears

    ["c02", "c18"], // Shape of You ↔ Shivers

    ["c02", "c13"], // Shape of You ↔ Stay
    ["c02", "c14"], // Shape of You ↔ Watermelon Sugar
    ["c13", "c14"], // Stay ↔ Watermelon Sugar
    ["c13", "c15"], // Stay ↔ drivers license
    ["c14", "c15"], // Watermelon Sugar ↔ drivers license
    ["c12", "c13"], // Levitating ↔ Stay
    ["c12", "c02"], // Levitating ↔ Shape of You

    ["c07", "c20"], // Bad Guy ↔ Happier Than Ever

    ["c07", "c12"], // Bad Guy ↔ Levitating
    ["c07", "c01"], // Bad Guy ↔ Blinding Lights
    ["c20", "c15"], // Happier Than Ever ↔ drivers license

    ["c03", "c04"], // Someone Like You ↔ Stay With Me
    ["c03", "c06"], // Someone Like You ↔ Shallow
    ["c04", "c06"], // Stay With Me ↔ Shallow
    ["c06", "c15"], // Shallow ↔ drivers license

    ["c08", "c19"], // Believer ↔ Enemy

    ["c08", "c10"], // Believer ↔ Smells Like Teen Spirit
    ["c10", "c09"], // Smells Like Teen Spirit ↔ Bohemian Rhapsody
    ["c09", "c16"], // Bohemian Rhapsody ↔ Stairway to Heaven
    ["c16", "c10"], // Stairway to Heaven ↔ Smells Like Teen Spirit
    ["c08", "c09"], // Believer ↔ Bohemian Rhapsody

    ["c11", "c05"], // Sunflower ↔ Starboy
    ["c11", "c13"], // Sunflower ↔ Stay

    ["c01", "c08"], // Blinding Lights ↔ Believer (alta energía)
    ["c11", "c12"], // Sunflower ↔ Levitating (vibes positivas)
    ["c18", "c14"], // Shivers ↔ Watermelon Sugar (pop alegre)
    ["c03", "c20"], // Someone Like You ↔ Happier Than Ever (emocional)
    ["c06", "c03"], // Shallow ↔ Someone Like You (dramáticas)
];

export default ARISTAS;