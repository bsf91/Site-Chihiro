import { promises as fs } from "fs";
import path from "path";

const srcDir = "./src/img";
const destDir = "./dist/img";

async function copiarImagens() {
    try {
        await fs.mkdir(destDir, { recursive: true });
        const arquivos = await fs.readdir(srcDir);

        for (const arquivo of arquivos) {
            const origem = path.join(srcDir, arquivo);
            const destino = path.join(destDir, arquivo);
            await fs.copyFile(origem, destino);
            console.log(`Copiado: ${arquivo}`);
        }

        console.log("Todas as imagens foram copiadas com sucesso!");
    } catch (err) {
        console.error("Erro ao copiar imagens:", err);
    }
}

copiarImagens();
