const parseMarkdown = (text: string) => {
    // Split the text by '**' to identify bold segments
    const parts = text.split('**');
    // Map over the parts,
    //  if the text start with and end with '**', trim then wrap in <strong>
    // otherwise wrap in the provided wrapper
    return parts;
}

export default parseMarkdown;