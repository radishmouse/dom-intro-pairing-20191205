// This is not the REAL DOM.
// It's an illustration of how a browser might
// keep up with Elements on the page.
const document = {
    doctype: "html",
    children: [
        {
            type: "html",
            children: [
                {
                    type: "head",
                    children: [
                        {type: "meta"},
                        {type: "meta"},
                        {type: "title"}
                    ]
                },
                {
                    type: "body",
                    children: [
                        {
                            type: "img",
                            properties: [
                                {
                                    type: "class",
                                    values: [
                                        "js-picture"
                                    ]
                                },
                                {
                                    type: "src"
                                }
                            ]
                        },
                        {
                            type: "button",
                            properties: [
                                { type: "class"}
                            ],
                            children: [
                                {
                                    type: "text",
                                    value: "bunny"
                                }
                            ]

                        }
                    ]
                }
            ]
        }
    ]

};