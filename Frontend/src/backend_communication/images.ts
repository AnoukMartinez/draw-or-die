export class BECommImages {
    async uploadArtwork(userId: number, selectedFile: File) {
        const formData = new FormData();
        // "file" muss gleich mit BE body attributnamen sein
        formData.append('file', selectedFile)
    
        try {
            const response = await fetch(`http://localhost:3000/users/${userId}/images`, {
                method: 'POST',
                body: formData,
            });
    
            if (!response.ok) throw new Error('Upload failed');
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    async getAllArtworks() {
        return;
    }
    
    async getAllArtworksByUser(userId: number) {
        return;
    }
}