import { SharedService } from "../services/shared.service";

export class EditorConfig {

    static defaultEditorConfig = {
        toolbar: [
            [{'size': ['small', false, 'large', 'huge']}],  // Size dropdown
            [{'header': [1, 2, 3, 4, 5, 6, false]}],       // Header dropdown
            [{'font': []}],                                // Font dropdown
            ['bold', 'italic', 'underline', 'strike'],     // Bold, italic, underline, and strike
            [{'align': []}],                               // Alignment options
            [{'list': 'ordered'}, {'list': 'bullet'}],     // Lists, ordered and unordered
            [{'indent': '-1'}, {'indent': '+1'}],          // Indentation (outdent, indent)
            [{'direction': 'rtl'}],                        // Right-to-left text
            ['blockquote', 'code-block'],                  // Blockquote, code block
            [
                {'color': ["#0c748d", "#000000", "#ffffff", "#ff0000", "#0000ff"]},  // Text color options
                {'background': ["#0c748d", "#000000", "#ffffff", "#ff0000", "#0000ff"]}  // Background color options
            ],
            ['link', 'image', 'video'],  // Link, image, and video buttons
            [{'script': 'sub'}, {'script': 'super'}],      // Subscript, superscript
            ['clean']           // Clear formatting
        ]
    };

    static getNewsletterEditorConfig(sharedService: SharedService) {
        return {
            theme: 'snow',
            modules: {
                toolbar: EditorConfig.defaultEditorConfig.toolbar,
                imageUploader: {
                    upload: (file: File) => {
                        return new Promise((resolve) => {
                            const reader = new FileReader();
                            reader.onload = () => {
                                sharedService.uploadImageToServer(file).subscribe((response: any) => {
                                    console.log(response);
                                    resolve('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png');
                                });
                            };
                            reader.readAsDataURL(file);
                        });
                    }
                }
            }
        };
    }
}
