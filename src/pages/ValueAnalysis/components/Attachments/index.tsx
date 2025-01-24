import { SectionTitle } from 'components/SectionTitle';
import * as S from './styles';
import { Button } from 'components/Button';
import { useState } from 'react';

export const Attachments = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filesEvent = event.target.files;
    const filesArr: File[] = [...files];
    if (filesEvent) {
      for (let i = 0; i < filesEvent.length; i++) filesArr.push(filesEvent[i]);
    }
    const totalFileSize = filesArr.reduce((prev, curr) => prev + curr.size, 0);
    if (totalFileSize > 5 * 1024 * 1024)
      console.log('Files exceed size (5 MB)');
    else setFiles(filesArr);
  };

  const selectFile = (type: string) => {
    if (type.includes('pdf'))
      return <S.StyledFileIcon className="bx bxs-file-pdf"></S.StyledFileIcon>;
    if (type.includes('image'))
      return (
        <S.StyledFileIcon className="bx bxs-file-image"></S.StyledFileIcon>
      );
    if (type.includes('doc'))
      return <S.StyledFileIcon className="bx bxs-file-doc"></S.StyledFileIcon>;
    return <S.StyledFileIcon className="bx bxs-file-blank"></S.StyledFileIcon>;
  };

  const showFileSize = (size: number) => {
    if (size < 1024) return size + ' B';
    if (size >= 1024 && size < 1024 * 1024)
      return (size / 1024).toFixed(3) + ' KB';
    return (size / (1024 * 1024)).toFixed(3) + ' MB';
  };

  const removeFile = (index: number) => {
    const auxFiles = [...files];
    auxFiles.splice(index, 1);
    setFiles(auxFiles);
  };

  return (
    <S.StyledContainer>
      <SectionTitle title="Anexos" description="Insira as cotações envidas" />
      <S.StyledFileContainer>
        <S.ButtonsContainer>
          <Button
            style={{ marginRight: '14px' }}
            component="label"
            types="primary"
            title="Adicionar"
          >
            Adicionar
            <S.StyledInputFile
              type="file"
              onChange={(event) => handleFileChange(event)}
              multiple
            ></S.StyledInputFile>
          </Button>
          <Button types="third" title="Upload" />
          <Button
            types="secondary"
            onClick={() => setFiles([])}
            title="Cancelar"
          />
        </S.ButtonsContainer>
        {files.length > 0 && (
          <S.FileContainer>
            {files.map((file, index) => (
              <S.StyledFileItem key={file.name}>
                {selectFile(file.type)}
                <S.StyledFileTitle>{file.name}</S.StyledFileTitle>
                <S.StyledFileSize>{showFileSize(file.size)}</S.StyledFileSize>
                <S.StyledFileRemoveIcon
                  onClick={() => removeFile(index)}
                  className="bx bx-x-circle"
                ></S.StyledFileRemoveIcon>
              </S.StyledFileItem>
            ))}
          </S.FileContainer>
        )}
      </S.StyledFileContainer>
    </S.StyledContainer>
  );
};
