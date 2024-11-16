class Node {
    async invokeModal(input) {
        console.log(`invokeModal called with:`, { input });
        return { success: true };
    }
}

export { Node };
