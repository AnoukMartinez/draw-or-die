export class BECommImages {
    async uploadArtwork(userId: number, selectedFile: File) {
        const formData = new FormData();
        formData.append('file', selectedFile)
    
        try {
            const response = await fetch(`http://localhost:3000/users/${userId}/images`, {
                method: 'POST',
                body: formData,
            });
    
            if (!response.ok) throw new Error(`${response.json}`);
            const result = await response.json();
            return result
        } catch (error) {
            console.error(error);
        }
    }

    async getAllArtworks() {
        try {
            const response = await fetch(`http://localhost:3000/images`, {
                method: 'GET'
            });
    
            if (!response.ok) throw new Error(`${response.status}`);
            const result = await response.json();
            return result
        } catch (error) {
            console.error(error);
        }
    }
    
    async getAllArtworksByUser(userId: number) {
        try {
            const response = await fetch(`http://localhost:3000/users/${userId}/images`, {
                method: 'GET'
            });
    
            if (!response.ok) throw new Error(`${response.status}`);
            const result = await response.json();
            console.log(result)
            return result
        } catch (error) {
            console.error(error);
        }
    }
}