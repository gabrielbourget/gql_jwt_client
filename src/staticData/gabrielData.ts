import { Resource } from "../Types";
import {
  DIRECTORY, GOOGLE_DRIVE, DOCUMENT_FILE, EPUB_FILE, PDF_FILE,
  WORD_DOCUMENT_FILE, JPG_FILE, IMAGE_FILE, POWERPOINT_FILE,
  SLIDES_FILE, SVG_FILE
} from "../constants";

export const gabrielData: Resource = {
  id: '8f588a8f-c8fe-4032-8ac9-c8dd7e1adc2d',
  name: 'Resources',
  types: [DIRECTORY],
  children: [
    {
      id: '1001907c-b6bd-4e04-ae16-34618ccc4a7f',
      name: 'Resources Directory',
      types: [GOOGLE_DRIVE],
      link: 'https://drive.google.com/drive/folders/177U6rwHGmgVLXaZNcLU1WM6UkmSA1SC7?usp=sharing'
    },
    {
      id: 'bcb2eebb-feab-4e5e-81c8-20e869052a56',
      name: 'Authors',
      types: [DIRECTORY],
      children: [
        {
          id: '6976156d-2f4c-4f08-9552-8d068547a53d',
          name: 'Authors - Directory',
          types: [GOOGLE_DRIVE],
          link: 'https://drive.google.com/drive/folders/1EBiIySVC9FRoMEqrH2k8jGpGGI7U0Z3V?usp=sharing'
        },
        {
          id: 'c831eb62-59e0-4ffd-94a1-59653a6ab517',
          name: 'Alex Vitale',
          types: [DIRECTORY],
          children: [
            {
              id: 'f8471384-f9e0-460c-8db5-0df4506a854d',
              name: 'Alex Vitale Directory',
              types: [GOOGLE_DRIVE],
              link: 'https://drive.google.com/drive/folders/1si2cMOGFCKqdAvod1JPuljMYqwADylO5?usp=sharing',
            },
            {
              id: '66044441-4621-4e4b-b94c-3b674298ab82',
              name: 'The End of Policing',
              types: [DIRECTORY],
              children: [
                {
                  id: 'b0a83e27-6459-4111-8aaf-7c9eb945295e',
                  name: 'The End of Policing Directory',
                  types: [GOOGLE_DRIVE],
                  link: 'https://drive.google.com/drive/folders/1siYoGdFcFAkB4O6l4Fcq1AU2Agz8bXpE?usp=sharing'
                },
                {
                  id: '342103ba-88b0-47b9-b863-11db7b04a4a7',
                  name: 'Alex Vitale - The End of Policing',
                  types: [DOCUMENT_FILE, EPUB_FILE],
                  link: 'https://drive.google.com/file/d/1wt8-8cfnnnSjH7Ci4aMQhBaUQA3B0eWX/view?usp=sharing',
                },
                {
                  id: 'c91a5d16-2a74-4d20-bc96-b7aaa759ead8',
                  name: 'Alex Vitale - The End of Policing',
                  types: [PDF_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1RcVWLzXrPLDcQH5D6m9mYkqOwGGlRIaP/view?usp=sharing'
                }
              ]
            }
          ]
        },
        {
          id: 'b8e9ab4c-8e5a-4c62-89c4-573752d6d950',
          name: 'Frantz Fanon',
          types: [DIRECTORY],
          children: [
            {
              id: '061624b0-9274-4882-9b6b-08400a9c5343',
              name: 'Frantz Fanon Directory',
              types: [GOOGLE_DRIVE],
              link: 'https://drive.google.com/drive/folders/1xzbsfvsLFBiwRgbaOae9C-GokhF1QkUM?usp=sharing',
            },
            {
              id: '774b87d3-1961-41fc-8313-e2f8a2bf1027',
              name: 'Frantz Fanon - The Wretched of the Earth',
              types: [PDF_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1qXwwPA3BoVSw-s2Du_RArY2FBZyRRyhE/view?usp=sharing',
            },
            {
              id: 'af062a8a-e597-4022-86f2-72eb58c920cc',
              name: 'The Wretched of The Earth - C1 - Notes',
              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1fkJD6kbQjKZuRugxYkb9DqXZVsHAcr-k/view?usp=sharing'
            },
            {
              id: 'fd185860-ea23-47db-bea5-6793617abb23',
              name: 'The Wretched of The Earth - C2 - Notes',
              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1d-wZqcP8M-KRgK12UX0DciLfpUXoY8vA/view?usp=sharing'
            },
          ]
        },
        {
          id: '080ad818-b698-40e1-9460-4edc6d05d7db',
          name: 'George Monbiot',
          types: [DIRECTORY],
          children: [
            {
              id: '2f99a981-97a1-4def-8d61-aa783eef51a0',
              name: 'George Monbiot Directory',
              types: [GOOGLE_DRIVE],
              link: 'https://drive.google.com/drive/folders/1H3osK9RlvLoK73vVGSrN79vWw24OfAgz?usp=sharing',
            },
            {
              id: '12d7ecac-7c6b-489e-91dc-80253bf00ecb',
              name: 'How Did We Get Into This Mess?',
              types: [DIRECTORY],
              children: [
                {
                  id: 'df80d283-583b-4e40-baf3-30295682e98e',
                  name: 'How Did We Get Into This Mess? - Directory',
                  types: [GOOGLE_DRIVE],
                  link: 'https://drive.google.com/drive/folders/1EYPTEGsZGFDcwKVqOdcePrkvkBtY3jSk?usp=sharing',
                },
                {
                  id: '48784dac-679a-4c3c-bf80-abd207f008d8',
                  name: 'How Did We Get Into This Mess?',
                  types: [PDF_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1Je0yR_JYs1xmg1c61WB65uSOMJra-Uus/view?usp=sharing',
                },
                {
                  id: '6db9a68f-0b92-4a74-be10-ca9f061b14ab',
                  name: 'How Did We Get Into This Mess?',
                  types: [DOCUMENT_FILE, EPUB_FILE],
                  link: 'https://drive.google.com/file/d/1n89aiTQUlDy8FgI8sQyWvPGFZ8X4KJJ2/view?usp=sharing',
                },
                {
                  id: '72073b0a-90bd-4fad-8fb6-64fd6146973e',
                  name: 'How Did We Get Into This Mess? - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1Z3I-do5wN4xGFrsoWlrjaDuvM6fLS4gG/view?usp=sharing',
                },
                {
                  id: 'eb2b6dab-a5c7-42c2-a4d9-cd3da294d73f',
                  name: 'How Did We Get Into This Mess? - Highlights',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1CWnxtdPGCGU-sgEa4eYyUatbVZjBKpxu/view?usp=sharing',
                }
              ]
            },
            {
              id: 'f64096e0-e5f2-4d67-b9d5-e621d325f0d0',
              name: 'Out of the Wreckage',
              types: [DIRECTORY],
              children: [
                {
                  id: '437ee8c4-a013-4108-9ed9-abc065daf163',
                  name: 'Out of the Wreckage - Directory',
                  types: [GOOGLE_DRIVE],
                  link: 'https://drive.google.com/drive/folders/1sgCAj5iez1I-9CmiYTpj4NCbeXmew0tH?usp=sharing'
                },
                {
                  id: 'ab9e209b-4b34-4849-8560-575bc93b4927',
                  name: 'Out of the Wreckage',
                  types: [PDF_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1v3Dg20ZPbym3NxUkLn6i7KPaeGnM03RI/view?usp=sharing'
                },
                {
                  id: 'bb3187a5-d3ff-4dcf-b692-1721a27fd69b',
                  name: 'Out of the Wreckage',
                  types: [DOCUMENT_FILE, EPUB_FILE],
                  link: 'https://drive.google.com/file/d/1grNSsof2KVXknbZG0fb-yoVONKKqEMnW/view?usp=sharing'
                },
                {
                  id: '87be77b6-a1ed-4c81-a577-da408ecedaef',
                  name: 'Out of the Wreckage - Condensed Book Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1wH1OLLogaoHWtt__rhZ_fvtYhw7WRr3f/view?usp=sharing'
                },
                {
                  id: '0ab07c63-29c1-4b84-9ab3-3daea087dc98',
                  name: 'Out of the Wreckage - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1s_Zdh5f1JfLephjZtGcWasZYMD40AQXF/view?usp=sharing'
                },
                {
                  id: '86429a45-ca57-4344-aec8-b2609dcd45e3',
                  name: 'Figures',
                  types: [DIRECTORY],
                  children: [
                    {
                      id: '002f4b49-eab4-44c8-bfd8-27e2a8228057',
                      name: 'Figures Directory',
                      types: [GOOGLE_DRIVE],
                      link: 'https://drive.google.com/drive/folders/1chb4zdtW3Rvq07z4XCrfjBBe1RzUx-8L?usp=sharing',
                    },
                    {
                      id: '90804744-fddb-4952-a95c-6fd929971ee0',
                      name: 'Circular Flow',
                      types: [JPG_FILE, IMAGE_FILE],
                      link: 'https://drive.google.com/file/d/1t9CQ9-NDtrh9V-tF4hA779w0jWYrlmhs/view?usp=sharing',
                    },
                    {
                      id: '7e5e7d51-0a7d-4722-bf50-f496560e2851',
                      name: 'Embedded Economy',
                      types: [JPG_FILE, IMAGE_FILE],
                      link: 'https://drive.google.com/file/d/1X0LUoF4ST4U6ZoQmMjMg4QV5izLyBSox/view?usp=sharing',
                    },
                    {
                      id: 'bb700312-711d-42be-aea5-1fe66e1d1afa',
                      name: 'Donut Economics',
                      types: [JPG_FILE, IMAGE_FILE],
                      link: 'https://drive.google.com/file/d/1X0LUoF4ST4U6ZoQmMjMg4QV5izLyBSox/view?usp=sharing'
                    }
                  ]
                },
                {
                  id: '71022c32-e795-4311-b1db-28c69df86071',
                  name: 'Slides',
                  types: [DIRECTORY],
                  children: [
                    {
                      id: '0bf160c9-7e99-4736-944a-680bc4a7adb3',
                      name: 'Slides Directory',
                      types: [GOOGLE_DRIVE],
                      link: 'https://drive.google.com/drive/folders/1tspPxSs9z_7ZKPIabxTf1-GOBTAcX7f1?usp=sharing',
                    },
                    {
                      id: '5fd10aec-fc98-479c-b17d-9eec6d321557',
                      name: 'Chapter Slides',
                      types: [DIRECTORY],
                      children: [
                        {
                          id: 'd49b86f5-86a5-4b45-8c60-b66a206f1fe4',
                          name: 'Chapter Slides Directory',
                          types: [GOOGLE_DRIVE],
                          link: 'https://drive.google.com/drive/folders/14R3_VAntWGz4-2K9qMwnoazjeQZM1HQ_?usp=sharing'
                        },
                        {
                          id: 'ed9bb038-db84-4d38-9817-583f327fa3f0',
                          name: 'C1',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1kVbGknec-dKkYAD9VoUOJgFMYMMnyvk6/view?usp=sharing',
                        },
                        {
                          id: '67ac9c1a-ecf4-41e0-9749-f20c29b257bb',
                          name: 'C2',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1sZ6ARiY39YYptgiAvjYjLaqbGZnnruD6/view?usp=sharing'
                        },
                        {
                          id: '19d7805c-dec9-4b81-a407-ec728286741e',
                          name: 'C3',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1y75u-F0eatYyjDNM6Gd32P2bvej7MqFt/view?usp=sharing'
                        },
                        {
                          id: '91d88dfc-c65a-48f3-a4db-fdb0633bcd56',
                          name: 'C4',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1C6oMRk6i7JzJ19Tw3b4cQdVT8J-Etgda/view?usp=sharing'
                        },
                        {
                          id: 'daad632a-3d03-45b6-8f0d-612623266858',
                          name: 'C5',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/13ZZUe5qz3QOF4iZ8VLUT_DCgNMVEvdb1/view?usp=sharing'
                        },
                        {
                          id: '085efda7-89c2-46f3-a14c-788f1255bcb3',
                          name: 'C6',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1aGNmUBIbJoX-GjDlB5JyRNe1Dk8a4Cqh/view?usp=sharing'
                        },
                        {
                          id: '9c406e1f-556b-4d89-9546-bb8b8f368778',
                          name: 'C7',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/13X2IWmmpyLlWlLBz_k1efl9iMy9mIeLT/view?usp=sharing'
                        },
                        {
                          id: '1896ee95-52b0-428c-a8a1-ee8ef3999b1c',
                          name: 'C8',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1MpBCy14Q7FJo_EnygpoEh0NU9Wc5KXcf/view?usp=sharing'
                        },
                        {
                          id: '5579bfc2-4184-46cd-9cd4-c2c33df80487',
                          name: 'C9',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1IcQ5QgA-qQ_81aM6m5Wc4fBeD8_ipLSQ/view?usp=sharing'
                        },
                        {
                          id: '3c576fed-5a42-43af-859f-2d8d580d20c8',
                          name: 'Conclusion',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1ILY5TL7j1hRd0qTZapiHhvS6C0wxMXW0/view?usp=sharing'
                        },
                      ]
                    },
                    {
                      id: '187944e2-9bfd-430b-b91c-618271bec86c',
                      name: 'Condensed Chapter Slides',
                      types: [DIRECTORY],
                      children: [
                        {
                          id: '93ef9065-7f75-4ed6-8041-3252e4e0eb2f',
                          name: 'Condensed Chapter Slides Directory',
                          types: [GOOGLE_DRIVE],
                          link: 'https://drive.google.com/drive/folders/1efR15WX-fFo0l_jdRYqX-zmQKlV2A4uT?usp=sharing',
                        },
                        {
                          id: '4a2b2322-aaf2-446a-984d-880034ec31aa',
                          name: 'C1 - Condensed Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1zRNoRILODd554l8sC6KlrxDlpC8tr2zP/view?usp=sharing'
                        },
                        {
                          id: '5bead6da-7a31-47a5-a8d5-c79788957a9c',
                          name: 'C2 - Condensed Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1PhuIIhmYSQUP0k8AnVBx-JC378Z0ZJar/view?usp=sharing'
                        },
                        {
                          id: '0e966797-6a25-4bda-a5e6-3df406e8d15c',
                          name: 'C3 - Condensed Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1JUQcyJUlLmRyb6KhNiKrED050pADibR4/view?usp=sharing'
                        },
                        {
                          id: '5897b6cb-967c-4242-8d8d-0f114082c3a9',
                          name: 'C4 - Condensed Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1_OY1w3st4TSOe15BEuDDIUhvLW7UKrjI/view?usp=sharing'
                        },
                        {
                          id: '42d4ab06-49b4-4e2d-ba64-8e016110b78a',
                          name: 'C5 - Condensed Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/12m6A6CfpRHSKaOVtT0ooDs9vk-Kbj6tD/view?usp=sharing'
                        },
                        {
                          id: 'acfbf64c-a24f-41c1-9b93-22c4b2bc9374',
                          name: 'C6 - Condensed Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/10OG6oork1udOAHaKQf6fPo8QRttLGp1x/view?usp=sharing'
                        },
                        {
                          id: '5b01133d-feee-46ba-83da-1250f8cf41a4',
                          name: 'C7 - Condensed Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1tk9pBZgFwLLzjWGpNVqoTkCaSvFLloHh/view?usp=sharing'
                        },
                        {
                          id: '9a68b319-826d-4cb0-ad97-7e73d44c4f75',
                          name: 'C8 - Condensed Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1AVbJjXrccoJpzcmYiXlePFOzDg8nsXVC/view?usp=sharing'
                        },
                        {
                          id: '39b59b6d-a4fa-4439-b9d2-195747f244c0',
                          name: 'C9 - Condensed Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1CW8sTpaEFs1yMo4Kyd7vgv5Yn2kfWMgs/view?usp=sharing'
                        },
                        {
                          id: '95a5f82b-c8ec-424a-8afa-8f22d56f4f9d',
                          name: 'Conclusion - Condensed Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1dEOj9fq7qeLyQP7zC3GymwCVHQT2GIS-/view?usp=sharing'
                        },
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'fe6d9063-0881-40a6-82ce-b66ff2b0f7a6',
          name: 'Jonathan Smucker',
          types: [DIRECTORY],
          children: [
            {
              id: 'b11c3717-1789-4ad5-8eac-4b0d8d1a1896',
              name: 'Hegemony How To - Jonathan Smucker',
              types: [DIRECTORY],
              children: [
                {
                  id: '9ae3488b-416f-41b7-a7be-0160fc112ade',
                  name: 'Hegemony How To - Directory',
                  types: [GOOGLE_DRIVE],
                  link: 'https://drive.google.com/drive/folders/1DljQxkGHtP406G8GOGCXBHyG5wF1P2s3?usp=sharing',
                },
                {
                  id: 'ca596570-e2c5-4150-901d-1197efdb1a3c',
                  name: 'Hegemony How To - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1UhlfAWjFWlTNpQuF9ipf1s4dtsSL-i2k/view?usp=sharing',
                },
                {
                  id: '25290c74-9dea-4210-bc0d-e60c8f29e203',
                  name: 'Hegemony How To - Jonathan Smucker',
                  types: [DOCUMENT_FILE, EPUB_FILE],
                  link: 'https://drive.google.com/file/d/1UUuTMfCKOdmM9QWlLtlgZfuP40p4TBnN/view?usp=sharing',
                },
                {
                  id: '4b6d91a8-c34a-4da5-9285-7e9320eb8447',
                  name: 'Hegemony How To - Jonathan Smucker',
                  types: [PDF_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1pFikK42mXETX7baaRT2k4SWQzxc9NKRk/view?usp=sharing',
                }
              ]
            }
          ]
        },
        {
          id: '987402aa-59d9-401a-b388-173187dc6f6d',
          name: 'Kate Raworth',
          types: [DIRECTORY],
          children: [
            {
              id: '6dee6562-7d51-4093-a8a8-abf233a764b2',
              name: 'Kate Raworth - Directory',
              types: [GOOGLE_DRIVE],
              link: 'https://drive.google.com/drive/folders/1grRjrG-5Nvdf8VgLlVYnEGE1XbPwBqAL?usp=sharing',
            },
            {
              id: '7e143a5d-92ee-4b74-b966-305ceb382e89',
              name: 'Doughnut Economics - Kate Raworth',
              types: [DIRECTORY],
              children: [
                {
                  id: 'b2c287e7-32e8-48aa-b46d-210e2e9a6a41',
                  name: 'Doughnut Economics - Directory',
                  types: [GOOGLE_DRIVE],
                  link: 'https://drive.google.com/drive/folders/1a6gYo1p3dodiK-EL36XqQ0dxqY-h02st?usp=sharing'
                },
                {
                  id: 'e2c0815a-7488-49c3-a2fe-11f0bc558d03',
                  name: 'Doughnut Economics - Kate Raworth',
                  types: [DOCUMENT_FILE, EPUB_FILE],
                  link: 'https://drive.google.com/file/d/1wdifSNSGbZkqlGLI26y8c10q4Mfyfky_/view?usp=sharing',
                },
                {
                  id: '3b6a10dd-35ba-4c8e-a301-eb215cfcd12f',
                  name: 'Doughnut Economics - Kate Raworth',
                  types: [PDF_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1ayrH1CBMHxury24C6aaThkpoXjOzuBb2/view?usp=sharing'
                },
                {
                  id: 'fcaa9f27-d30c-4afa-a75f-cf897a0f051d',
                  name: 'Notes',
                  types: [DIRECTORY],
                  children: [
                    {
                      id: '40cad508-b195-4bb3-9758-908ef03d5677',
                      name: 'Notes - Directory',
                      types: [GOOGLE_DRIVE],
                      link: 'https://drive.google.com/drive/folders/1Y-7FBPQ02y4niOEkoHhrB-BCq04w_xMQ?usp=sharing'
                    },
                    {
                      id: 'a75ad504-e81d-4487-9ff0-88cf12fb0702',
                      name: 'Doughnut Economics - Notes',
                      types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                      link: 'https://drive.google.com/file/d/18bSFMU6PmsyQqLGD8pG4_NXWKXAnAAC8/view?usp=sharing',
                    },
                    {
                      id: 'a84f0865-adc8-4cc0-95c8-6fedec1736a1',
                      name: 'Chapters',
                      types: [DIRECTORY],
                      children: [
                        {
                          id: '980ec500-cb39-4da5-a1ed-0681e31dcb95',
                          name: 'Chapters - Directory',
                          types: [GOOGLE_DRIVE],
                          link: 'https://drive.google.com/drive/folders/1tesBBr1NG_utOSYEEWdkOVMtqV4AjWAK?usp=sharing',
                        },
                        {
                          id: '458f4267-0f3e-4ad5-a4f7-7cfeac05a358',
                          name: 'Abridged',
                          types: [DIRECTORY],
                          children: [
                            {
                              id: 'ab918061-53d9-40b0-a92a-46fdc8c88310',
                              name: 'Abridged - Directory',
                              types: [GOOGLE_DRIVE],
                              link: 'https://drive.google.com/drive/folders/1bUXqvy_3Dci51DZOl3EMrlGfL9tgsUjK?usp=sharing'
                            },
                            {
                              id: 'ee6eb405-ff03-4a3f-a963-fe77f34b599f',
                              name: 'Introduction - Abridged Notes',
                              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                              link: 'https://drive.google.com/file/d/1RFAOPcGbrVJH_6PZEN7O4L-sAj5XhH3f/view?usp=sharing'
                            },
                            {
                              id: '44fe28f6-8b5f-4e5a-9ae5-2bbed6065cc0',
                              name: 'C1 - Abridged Notes',
                              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                              link: 'https://drive.google.com/file/d/1sV4J9ppZ2ZNicdvryWsLurcd4fFh_4pg/view?usp=sharing'
                            },
                            {
                              id: '7ded3c43-1f07-42c9-994e-2e548fb50b5e',
                              name: 'C2 - Abridged Notes',
                              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                              link: 'https://drive.google.com/file/d/13rU-z7jGHTnsKdRN0DA1eCKCCPRHUOxw/view?usp=sharing'
                            },
                            {
                              id: '5baa0788-0902-4a25-a657-2f14e17eb893',
                              name: 'C3 - Abridged Notes',
                              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                              link: 'https://drive.google.com/file/d/13zsoydhKCEK1BxhnaAyYTq9LPn6uYXxJ/view?usp=sharing'
                            },
                            {
                              id: '14743d58-c377-4976-8d6c-78fd59384446',
                              name: 'C4 - Abridged Notes',
                              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                              link: 'https://drive.google.com/file/d/1O_ZZoN2c9IRAkLEegMWw1xGQOfs2B3P_/view?usp=sharing'
                            },
                            {
                              id: '57c5de0f-b4cf-4ef3-8be9-fa6ea1fe1d06',
                              name: 'C5 - Abridged Notes',
                              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                              link: 'https://drive.google.com/file/d/1b6Hs-Z1TfP37UzP8VC3OhVqJXTHsXirV/view?usp=sharing'
                            },
                            {
                              id: 'daa89c3e-0382-4b0a-876f-871d29c56be2',
                              name: 'C6 - Abridged Notes',
                              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                              link: 'https://drive.google.com/file/d/1ABB6mihMpNL679UbjSPsQipKDmzpkC7J/view?usp=sharing'
                            },
                            {
                              id: 'dca72025-43b8-4f93-b785-9fc7fa08f4f5',
                              name: 'C7 - Abridged Notes',
                              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                              link: 'https://drive.google.com/file/d/1oDz8cpvP9i6unhq9uynmMARKai38ZgvP/view?usp=sharing'
                            },
                            {
                              id: '3636ad8a-df1d-4da0-a948-6e6eebae30d6',
                              name: 'Epilogue - Abridged Notes',
                              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                              link: 'https://drive.google.com/file/d/1fGqRDwwK1kb5EpnGTmUoivzLL5BQhpSV/view?usp=sharing'
                            },
                          ]
                        },
                        {
                          id: '1c36a037-5e1a-4806-bbea-c4cce8d39826',
                          name: 'Full',
                          types: [DIRECTORY],
                          children: [
                            {
                              id: 'aae0fee4-e3c1-422d-bd78-90d6dd419b92',
                              name: 'Full - Directory',
                              types: [GOOGLE_DRIVE],
                              link: 'https://drive.google.com/drive/folders/1zk4nTAwebC04k5FzgJAXzp1MZnXzbgL4?usp=sharing'
                            },
                            {
                              id: '5d9a1884-0f33-43de-94d1-442a905818db',
                              name: 'Introduction - Notes',
                              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                              link: ''
                            },
                            {
                              id: '0cb163fb-3266-4bb5-80ff-8ea88e7bbcc3',
                              name: 'C1 - Notes',
                              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                              link: ''
                            },
                            {
                              id: 'fc3b5629-96a6-482b-9cbf-bf9b8f7daf4b',
                              name: 'C2 - Notes',
                              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                              link: ''
                            },
                            {
                              id: 'b55aea14-0f43-4a85-b8e3-864ae3781674',
                              name: 'C3 - Notes',
                              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                              link: ''
                            },
                            {
                              id: 'e54a281c-6daa-4764-82f0-3de4ebf2f2e7',
                              name: 'C4 - Notes',
                              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                              link: ''
                            },
                            {
                              id: 'cf6e1f40-18ea-42c7-b54f-674427458547',
                              name: 'C5 - Notes',
                              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                              link: ''
                            },
                            {
                              id: '98ceae84-e56b-4f8c-a115-35be85b426da',
                              name: 'C6 - Notes',
                              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                              link: ''
                            },
                            {
                              id: '06e0ce6f-c31f-496f-93f6-b4b7ee732262',
                              name: 'C7 - Notes',
                              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                              link: ''
                            },
                            {
                              id: '988205c9-47a2-4144-88c9-04c9470c275d',
                              name: 'Epilogue - Notes',
                              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                              link: ''
                            },
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 'c35d0867-b10d-475a-b87d-cc3bf6467841',
                  name: 'Slides',
                  types: [DIRECTORY],
                  children: [
                    {
                      id: '5ad03eac-adae-49bf-b949-c4055485ee4e',
                      name: 'Slides - Directory',
                      types: [GOOGLE_DRIVE],
                      link: 'https://drive.google.com/drive/folders/1FBAKsLAIRw3Hd8csuOijzQiMHzN6gMjQ?usp=sharing'
                    },
                    {
                      id: '46ffd94e-b236-4ef5-93ed-c8ddfb8320e0',
                      name: 'Introduction - Slides',
                      types: [POWERPOINT_FILE, SLIDES_FILE],
                      link: 'https://drive.google.com/file/d/1azoC7End9838ByzIOiTRVt15Tbm72V0p/view?usp=sharing'
                    },
                    {
                      id: '29daeaa9-b7fe-4f4f-ae76-58c62d4eec8f',
                      name: 'C1 - Slides',
                      types: [POWERPOINT_FILE, SLIDES_FILE],
                      link: 'https://drive.google.com/file/d/1Sl42yXvHgHagwdeFXGZiO4sxSkw4tiIH/view?usp=sharing'
                    },
                    {
                      id: 'fc01bfd2-b7eb-48b6-8091-d87550e29ade',
                      name: 'C2 - Slides',
                      types: [POWERPOINT_FILE, SLIDES_FILE],
                      link: 'https://drive.google.com/file/d/1mQYNeGHUyB9w5G_F7cx5lzZlAoDuxXMJ/view?usp=sharing'
                    },
                    {
                      id: '5fe9402f-eeea-4d1f-a042-3adc4fb8585f',
                      name: 'C3 - Slides',
                      types: [POWERPOINT_FILE, SLIDES_FILE],
                      link: 'https://drive.google.com/file/d/1YzSy-khhTF_V572SX9zSqfz9IMbyAB5v/view?usp=sharing'
                    },
                    {
                      id: '98b34fe7-67bd-4295-9e05-76c2299671f1',
                      name: 'C4 - Slides',
                      types: [POWERPOINT_FILE, SLIDES_FILE],
                      link: 'https://drive.google.com/file/d/1MlQl7qgvzVkOEOLkvq5ITFOdclgDyNQy/view?usp=sharing'
                    },
                    {
                      id: '007227ed-2889-476f-80aa-53707d33c4b6',
                      name: 'C5 - Slides',
                      types: [POWERPOINT_FILE, SLIDES_FILE],
                      link: 'https://drive.google.com/file/d/1cxk75qh7ncXJPZYBt5jzC1Zvkmh2sWOr/view?usp=sharing'
                    },
                    {
                      id: '58bab1ce-c008-4c75-b939-9cc795707109',
                      name: 'C6 - Slides',
                      types: [POWERPOINT_FILE, SLIDES_FILE],
                      link: 'https://drive.google.com/file/d/1iFHCtW0yP_XBzpqsbigN2QbmYPRlhEuL/view?usp=sharing'
                    },
                    {
                      id: '19241d32-ec03-4348-a1fb-996ecead5ebc',
                      name: 'C7 - Slides',
                      types: [POWERPOINT_FILE, SLIDES_FILE],
                      link: 'https://drive.google.com/file/d/1NCUR-s8exJYohINnGRa-agNv7pmfFo6-/view?usp=sharing'
                    },
                  ]
                }
              ]
            }
          ]
        },
        {
          id: '56792b6d-ae14-471b-9645-b5a43269feea',
          name: 'Keeanga Yamahtta-Taylor',
          types: [DIRECTORY],
          children: [
            {
              id: '3f856229-9696-4d49-af82-a30d1440c51e',
              name: 'From Black Lives Matter to Black Liberation',
              types: [DIRECTORY],
              children: [
                {
                  id: 'f68f53bd-9434-46ec-8b45-1c6c6369a3f4',
                  name: 'From Black Lives Matter to Black Liberation - Directory',
                  types: [GOOGLE_DRIVE],
                  link: 'https://drive.google.com/drive/folders/1zSKAT0nBd-giB3bs0O2zmP4VKrG-CnJH?usp=sharing'
                },
                {
                  id: 'c8fb26ba-ecb6-45c7-be97-4a0fb497a15c',
                  name: 'From Black Lives Matter to Black Liberation - Keeanga Yamahtta-Taylor',
                  types: [PDF_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1WLUWt68e226CVrwWdFrVz5GjysamWvCC/view?usp=sharing',
                },
                {
                  id: '413c31fb-1723-4ad3-b5d4-1a55062bb5cb',
                  name: 'From Black Lives Matter to Black Liberation - Keeanga Yamahtta-Taylor',
                  types: [DOCUMENT_FILE, EPUB_FILE],
                  link: 'https://drive.google.com/file/d/1rM8GWFC6WMKQ_kKzgld8KvSomqC0w49Z/view?usp=sharing',
                },
                {
                  id: '0edb6e2a-542a-46d1-9f1f-299d8a545c34',
                  name: 'From Black Lives Matter to Black Liberation - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1xORWlAki7JoaLR1U60PyhpAjhKK5-yMP/view?usp=sharing'
                }
              ]
            }
          ]
        },
        {
          id: '2d63af06-cb9d-49c0-9d19-4aacbca4208f',
          name: 'Paul Mason',
          types: [DIRECTORY],
          children: [
            {
              id: 'e967d2f1-5535-4d82-89f2-ab36244926fc',
              name: 'Postcapitalism - Paul Mason',
              types: [DIRECTORY],
              children: [
                {
                  id: '1f4ca0bd-d675-44b9-9087-46e5dcd6404a',
                  name: 'Postcapitalism - Paul Mason - Directory',
                  types: [GOOGLE_DRIVE],
                  link: 'https://drive.google.com/drive/folders/14s64L2QdfR60weP-esQelO3jjZ-vus45?usp=sharing',
                },
                {
                  id: '8f631654-fd87-43ca-afa3-73ebb646a4f7',
                  name: 'Postcapitalism - Paul Mason',
                  types: [PDF_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1CIyAoQK0ijkCEN5ItmKbzcYcE0OSNJ9M/view?usp=sharing',
                },
                {
                  id: '299c5dc9-f834-4310-9315-17c1e2a7749c',
                  name: 'Postcapitalism - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1bd8zVrQk2gAGs_zX21_c1gIHyVWHDrTa/view?usp=sharing',
                },
                {
                  id: 'c6c6e4c5-22e3-472b-b362-1b2b3d019b90',
                  name: 'Postcapitalism - Highlights',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1kKuXNhmJSYMHQFTiD8Q1HThFjKFqqjbP/view?usp=sharing'
                },
                {
                  id: '2bc6eb03-9177-4960-91de-93b0fcc4bdfd',
                  name: 'Postcapitalism - Abridged Book Summary',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1HlW2luShuLHNIv-Yz6MsCGRL-2IPKXNH/view?usp=sharing'
                },
                {
                  id: '14c9b2ad-c28a-4219-a002-4ef0fe9f78e7',
                  name: 'Slides',
                  types: [DIRECTORY],
                  children: [
                    {
                      id: '005ae9e5-c6db-4340-80fe-e0158da292a5',
                      name: 'Slides - Directory',
                      types: [GOOGLE_DRIVE],
                      link: 'https://drive.google.com/drive/folders/1gPD8_szlU0W8HFuSKPSWRTDG0OR_0bSC?usp=sharing'
                    },
                    {
                      id: '31993954-ecc6-4952-9798-ba6064e64def',
                      name: 'Chapter Synopses - Slides',
                      types: [POWERPOINT_FILE, SLIDES_FILE],
                      link: 'https://drive.google.com/file/d/1Fniqt1LV-RDN1MCFbKOoWtsv7u2RA0Ec/view?usp=sharing'
                    },
                    {
                      id: '97905931-3d71-488c-9fee-107000382be9',
                      name: 'Chapter Summaries',
                      types: [DIRECTORY],
                      children: [
                        {
                          id: '7d93fa02-dbc2-4348-9b96-46d058ac08a1',
                          name: 'Chapter Summaries - Directory',
                          types: [GOOGLE_DRIVE],
                          link: 'https://drive.google.com/drive/folders/1DSEEmJ1pZb7B90CDjRnAJsYhRt7aeRjJ?usp=sharing'
                        },
                        {
                          id: 'be7bdb02-d363-4d5c-a6be-891c438ab6e7',
                          name: 'All Chapter Summaries - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1N9Ceftd0eWL2JurPlgoZHCXe2jbWXQG-/view?usp=sharing'
                        },
                        {
                          id: 'c7efadc7-dfa6-4bdb-ac46-1a4c05510749',
                          name: 'Introduction - Summary - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1mrZyUFM23WHj3lEXCKt7czPM4sc3wuUb/view?usp=sharing'
                        },
                        {
                          id: 'f70b6553-c851-4d93-b695-56f9f60dc016',
                          name: 'C1 - Summary - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1sIDKZh64bd-77bmx2PthjD-3s7_c92C-/view?usp=sharing'
                        },
                        {
                          id: '67bd848b-c03a-4a2e-a9ee-6fa8fa077399',
                          name: 'C2 - Summary - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1DOqWhlISS-NCwOt5FOMuWr3jBMRU9LZq/view?usp=sharing'
                        },
                        {
                          id: 'aee28def-3496-45fd-b581-cd1f16d50fbd',
                          name: 'C3 - Summary - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1MVy1h-_Zr_srPMSAm2n7-aUZxGsBAVEc/view?usp=sharing'
                        },
                        {
                          id: '46a1ccfb-1232-4c26-854b-069a1ea3fc66',
                          name: 'C4 - Summary - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/10v6zwfsJf6TfOKBq0r5HIvij1KLaBnZQ/view?usp=sharing'
                        },
                        {
                          id: '9c944cb5-4a95-4407-937d-a4364dc31707',
                          name: 'C5 - Summary - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1g5WWZtu_7_q-oyh8wZYsvKwiiE7d30Jd/view?usp=sharing'
                        },
                        {
                          id: '270ab2bf-4ac9-4239-9700-4c2636f3d129',
                          name: 'C6 - Summary - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1vzasi5ZqLT6KF34P5_c-mHK94HVpPtmH/view?usp=sharing'
                        },
                        {
                          id: '712b38c5-ce18-4cc5-acaa-d245a2b2c79b',
                          name: 'C7 - Summary - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1tUW7zOmynOs1N4bZKXc-r8eF0u2Wu_E1/view?usp=sharing'
                        },
                        {
                          id: 'ab0e951a-4f73-4598-b419-bb2ad262144e',
                          name: 'C8 - Summary - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1qy_IMGzULDy8xk7ocSR2jN-8-9UexpuE/view?usp=sharing'
                        },
                        {
                          id: 'cbfcc25d-1006-4b92-8746-7de233db7988',
                          name: 'C9 - Summary - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/12tJmAQ7RSbkmakwCPV7p0tR45XQ_wqkI/view?usp=sharing'
                        },
                        {
                          id: 'bc3a4147-069f-4449-83da-b953e1ba78e2',
                          name: 'C10 - Summary - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1utp4RCXt13CR0lbjLnLchoCGTNxKO4Hx/view?usp=sharing'
                        },
                      ]
                    },
                    {
                      id: '70a6f1ea-f737-4489-b1c1-c5312c9e3354',
                      name: 'Chapters',
                      types: [DIRECTORY],
                      children: [
                        {
                          id: '900b4dd8-ea46-4b1c-a956-0c0975f0e519',
                          name: 'Chapters - Directory',
                          types: [GOOGLE_DRIVE],
                          link: 'https://drive.google.com/drive/folders/1BhNINqiSh7vBNkgAB9NPU7oh9RymNazu?usp=sharing'
                        },
                        {
                          id: '9e25acb9-c582-4bd5-b6e3-01c7eb7431c1',
                          name: 'Introduction - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/18tt66HoI_RH5SxPStPZtYjchCuJrCrLo/view?usp=sharing'
                        },
                        {
                          id: '9e6f9be1-84f6-43f0-96a0-3fefffeca9ac',
                          name: 'C1 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1CX5MBxSwsue6FQyLWjZ4Js34K9L-0wn7/view?usp=sharing'
                        },
                        {
                          id: '2c1caa62-8f65-4efa-b28e-8117637d9137',
                          name: 'C2 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1bPWXQZDBIV1jDpR_pyNImKIxg0N1ACPK/view?usp=sharing'
                        },
                        {
                          id: '0d5840a8-01c6-421a-98a6-479b852e6abe',
                          name: 'C3 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1YR5I3vi9B-AoRf7_QBFe5J-fNznu41uf/view?usp=sharing'
                        },
                        {
                          id: 'ce30713e-bbb4-4b03-b125-8a5603e8020a',
                          name: 'C4 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1RJ7DWEenIl3-JwJXhHt05pBgoWfXBNrQ/view?usp=sharing'
                        },
                        {
                          id: 'f0d9b7d1-52e3-45bd-ac77-a418972dbd9e',
                          name: 'C5 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1hS3UjvET0F2IZ-pfWMWuJSmJJa5BKetP/view?usp=sharing'
                        },
                        {
                          id: '4f50e426-804e-430c-9d15-94e2bcc3589f',
                          name: 'C6 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1HR-_oSaEiesw-qv2gooZ8U_4FOklKRmz/view?usp=sharing'
                        },
                        {
                          id: '5b65fde2-bb2d-474d-ae33-d5e5f6212383',
                          name: 'C7 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1WTbFysqOm33AV4N5bBHcIl7TWkreZ1mT/view?usp=sharing'
                        },
                        {
                          id: '5a2c37a1-0cd6-41de-bcf1-c81c41b235c0',
                          name: 'C8 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1bL4SFRmbN-oBgHkMm_LZpCLV1U86AMiT/view?usp=sharing'
                        },
                        {
                          id: '5651e69c-ce66-44af-8bd9-a7b49a7e3363',
                          name: 'C9 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/17VzfxjIeEzoRVuC0cAnl00gdHjE8k1iz/view?usp=sharing'
                        },
                        {
                          id: 'b5a91c4a-2ff5-4142-803a-eab636b63b11',
                          name: 'C10 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1rVa0Nfa4P1eU7s9PP5kZqOTIGogKiGAz/view?usp=sharing'
                        },
                      ]
                    },
                  ]
                }
              ]
            }
          ]
        },
        {
          id: '1c292658-4332-4551-a146-10528bc958d8',
          name: 'Shoshana Zubouf',
          types: [DIRECTORY],
          children: [
            {
              id: '19afb8bb-e3fc-48d2-999e-4be52e5b3c7f',
              name: 'Shoshana Zubouf - Directory',
              types: [GOOGLE_DRIVE],
              link: 'https://drive.google.com/drive/folders/1IPuuL5iQeBsggvW898ReYmMk6aSsT5AO?usp=sharing'
            },
            {
              id: 'fe3c2827-b4f6-4742-84f4-962654626c97',
              name: 'The Age of Surveillance Capitalism - Shoshana Zubouf',
              types: [DIRECTORY],
              children: [
                {
                  id: '0a8ccf5e-5f1f-47de-9adc-079c77d839a8',
                  name: 'The Age of Surveillance Capitalism - Shoshana Zubouf - Directory',
                  types: [GOOGLE_DRIVE],
                  link: 'https://drive.google.com/drive/folders/10KB0ZOdcC5ZErSXH0aJ-REByrlAC5s57?usp=sharing'
                },
                {
                  id: 'c673aea3-d79d-4a7f-9477-d867eaa41c38',
                  name: 'The Age of Surveillance Capitalism - Shoshana Zubouf',
                  types: [PDF_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1SJ04ddgRQaKfYNy_ZQEvAdhLmHKTmaiI/view?usp=sharing'
                },
                {
                  id: 'c0df7729-613a-459d-8541-34b0f59c708d',
                  name: 'The Age of Surveillance Capitalism - Shoshana Zubouf',
                  types: [DOCUMENT_FILE, EPUB_FILE],
                  link: 'https://drive.google.com/file/d/1kl3uGUDvIlCHXzig8KumxJ2BWfY1_fi5/view?usp=sharing'
                }
              ]
            }
          ]
        },
        {
          id: '6b60b193-c18f-4d64-a117-4ad869aeb366',
          name: 'Tithi Bhattacharya',
          types: [DIRECTORY],
          children: [
            {
              id: 'a0b3e44b-efc8-4a9b-b9c1-ce1fe4de6b4c',
              name: 'Tithi Bhattacharya - Directory',
              types: [GOOGLE_DRIVE],
              link: 'https://drive.google.com/drive/folders/1yS6FyP0QYZDnT6cXugmMzuJiRPC9OKwj?usp=sharing'
            },
            {
              id: '7346ae29-66c9-44e2-ac19-6886fba9b793',
              name: 'Social Reproduction Theory - Remapping Class, Recentering Oppression',
              types: [DIRECTORY],
              children: [
                {
                  id: '446671be-8eae-40fa-a9e5-75a6852cf00d',
                  name: 'Social Reproduction Theory - Remapping Class, Recentering Oppression - Directory',
                  types: [GOOGLE_DRIVE],
                  link: 'https://drive.google.com/drive/folders/1_bRiU80c6zEthhWxOsLfajHGm5mjHzfu?usp=sharing'
                },
                {
                  id: '43fb6bed-fc4b-40c7-8991-f72e693bc87c',
                  name: 'Social Reproduction Theory - Remapping Class, Recentering Oppression - Tithi Bhattacharya',
                  types: [PDF_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1BQpeqgEmTSXdHzwUVppNZ6jnehk6sWJh/view?usp=sharing'
                }
              ]
            }
          ]
        },
      ]
    },
    {
      id: '4ea6369f-789a-41df-b288-8658e7c0a82f',
      name: 'Democracy Collaborative',
      types: [DIRECTORY],
      children: [
        {
          id: '9a981830-c851-4a0f-bba1-2059739efb7a',
          name: 'Democracy Collaborative - Directory',
          types: [GOOGLE_DRIVE],
          link: 'https://drive.google.com/drive/folders/1aW1JZ_LgG797JfP5bbcrfSDQ5tYfnzNz?usp=sharing'
        },
        {
          id: '0b2961a4-08f0-4562-b1af-8b3843e0d1f9',
          name: 'Cities Building Community Wealth',
          types: [DIRECTORY],
          children: [
            {
              id: 'ba906b33-53b1-4541-9568-a4c31d4cd14c',
              name: 'Cities Building Community Wealth - Directory',
              types: [GOOGLE_DRIVE],
              link: 'https://drive.google.com/drive/folders/1vOZ6WpzVAFoBSLOOEfHcBKF4LWowXP4j?usp=sharing'
            },
            {
              id: 'df27ce0f-6831-48db-afc1-bb46ad4dab25',
              name: 'Cities Building Community Wealth - Democracy Collaborative',
              types: [PDF_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1rRU_BkUjQlR0TTAOaVSCjlAXs_zJO83G/view?usp=sharing'
            }
          ]
        },
        {
          id: '930f300b-35ca-4990-9b2f-cd7b5c7e58b8',
          name: 'Democratizing Ownership to Address Income Inequality',
          types: [DIRECTORY],
          children: [
            {
              id: '14a55b9a-b51a-465a-a838-280edf0a15f9',
              name: 'Democratizing Ownership to Address Income Inequality - Directory',
              types: [GOOGLE_DRIVE],
              link: 'https://drive.google.com/drive/folders/1xnR5ThndRdlkzNPouC4h-4h3LIUI2-fl?usp=sharing'
            },
            {
              id: 'eb6110e2-bbfb-45e5-aa18-4eedd47f911d',
              name: 'Democratizing Ownership to Address Income Inequality - Democracy Collaborative',
              types: [PDF_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1CR7RsEuJYNcFaVzqiCfKv63w1ZZ1Bper/view?usp=sharing'
            }
          ]
        },
        {
          id: '34116994-d0d0-497b-8d92-225a35290010',
          name: 'Taking Employee Ownership to Scale',
          types: [DIRECTORY],
          children: [
            {
              id: '3cf4a422-c660-4ccb-bf5f-63ef77e24591',
              name: 'Taking Employee Ownersip to Scale - Directory',
              types: [GOOGLE_DRIVE],
              link: 'https://drive.google.com/drive/folders/1yx_fA48j22LF5mlvzG2Bgkx2KqbaG8xV?usp=sharing'
            },
            {
              id: 'c24d78b6-0b86-40b9-bb5d-25aba7af280e',
              name: 'Taking Employee Ownership to Scale - Democracy Collaborative',
              types: [PDF_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1no7beRijra5J0Jxc3TTJwtckKYSorsi3/view?usp=sharing'
            }
          ]
        },
        {
          id: '139976b2-81e4-48f8-99c2-1f6822204485',
          name: 'The Role of Impact Investors in Taking Employee Ownership to Scale',
          types: [DIRECTORY],
          children: [
            {
              id: 'af84482d-1535-40c3-8045-b5314309a628',
              name: 'The Role of Impact Investors in Taking Employee Ownership to Scale - Directory',
              types: [GOOGLE_DRIVE],
              link: 'https://drive.google.com/drive/folders/123IixTm2PR1zwcJYzG_Z30BdO7CRT6MR?usp=sharing'
            },
            {
              id: 'abdaa3d5-3220-4223-a855-c2bf929a7538',
              name: 'The Role of Impact Investors in Taking Employee Ownership to Scale - Democracy Collaborative',
              types: [PDF_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1B25L1PenPWfhcCsTAAkMBulPAcZThlbD/view?usp=sharing'
            }
          ]
        }
      ]
    },
    {
      id: '0a548c28-a14f-41ac-b0b5-f31da3e3cf19',
      name: 'Enspiral',
      types: [DIRECTORY],
      children: [
        {
          id: 'abf346d9-8f78-4e21-b02e-f9a821d0c235',
          name: 'Enspiral - Directory',
          types: [GOOGLE_DRIVE],
          link: 'https://drive.google.com/drive/folders/1Zv5OlOCIL-pfQTU_UbNogscIdDUmMaY6?usp=sharing'
        },
        {
          id: '44f661f4-b682-4e6d-b69a-c1342eba1844',
          name: 'Better Work Together',
          types: [DIRECTORY],
          children: [
            {
              id: '882fac8c-b571-4b9e-9f5e-578658b3c304',
              name: 'Better Work Together - Enspiral - Directory',
              types: [GOOGLE_DRIVE],
              link: 'https://drive.google.com/drive/folders/1Zf386gsQkSH2mmEIOkhpP8T8ioPNT42o?usp=sharing'
            },
            {
              id: 'ab0f0e00-dfcc-4b88-8fe5-a739c975066a',
              name: 'Better Work Together - Enspiral',
              types: [PDF_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1X4L4kLOX9Lp1eVhZ-UDsg1sY4VnP1oLI/view?usp=sharing'
            }
          ]
        }
      ]
    },
    {
      id: 'ba826146-42e8-41cf-80e0-b66cea795669',
      name: 'Misc Papers',
      types: [DIRECTORY],
      children: [
        {
          id: '1afabda5-d863-4de5-95dd-3f0b46e47b37',
          name: 'Misc Papers - Directory',
          types: [GOOGLE_DRIVE],
          link: 'https://drive.google.com/drive/folders/1S4grSc0pAzg10_7X2sWW_ZsN274hnuoM?usp=sharing'
        },
        {
          id: 'dd7f53b0-3446-4d2e-83b2-f9822c8f7881',
          name: 'Ben Vivir - Eduardo Gudynas',
          types: [DIRECTORY],
          children: [
            {
              id: '373b698b-12fe-41ef-b2d2-e8e5d072f757',
              name: 'Ben Vivir - Eduardo Gudynas - Directory',
              types: [GOOGLE_DRIVE],
              link: 'https://drive.google.com/drive/folders/16bAn37bQQqiogkFAGBfXl_xbyDevas9O?usp=sharing',
            },
            {
              id: '55476dc8-74ca-4d71-a6db-f4baf9317285',
              name: 'Ben Vivir - Eduardo Gudynas',
              types: [PDF_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1Bs8YCWI4Bimw0cIhPk3nrLnHUsXiWb6H/view?usp=sharing'
            }
          ]
        },
        {
          id: '2ca82d26-6a85-45d7-a4fa-6ef21e21da7e',
          name: 'Democratic Money and Capital for the Commons',
          types: [DIRECTORY],
          children: [
            {
              id: 'f6a93e56-6638-44a9-a1d9-61892ab2044d',
              name: 'Democratic Money and Capital for the Commons - Directory',
              types: [GOOGLE_DRIVE],
              link: 'https://drive.google.com/drive/folders/15NN2IxA0NNZ6mYZHqNPGGCDzH4Qf9XxI?usp=sharing',
            },
            {
              id: '542ac0a1-a25f-4cc5-8289-81b8d5eb5d6e',
              name: 'Democratic Money and Capital for the Commons',
              types: [PDF_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1nNccGhiJJK8UFuJJ0cLwEKdME65rMUNz/view?usp=sharing'
            },
            {
              id: 'bfc53404-a98f-456c-b3e5-9dab91c8f951',
              name: 'Democratic Money and Capital for the Commons - Notes',
              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1tLGvpDiAxnOi4VmAnjY_vltrLSLlS6j-/view?usp=sharing',
            }
          ]
        },
        {
          id: '30f5608f-bb95-41ba-84de-0999baa84330',
          name: 'Effective Investing for the Long Term - Intentionality at Systems Levels',
          types: [DIRECTORY],
          children: [
            {
              id: '48cc8f7e-df71-44fa-8bea-114e8c1da8e2',
              name: 'Effective Investing for the Long Term - Intentionality at Systems Levels - Directory',
              types: [GOOGLE_DRIVE],
              link: 'https://drive.google.com/drive/folders/12mK7ZtvYKgOjUR2QEDRFXTrszMCGqMop?usp=sharing',
            },
            {
              id: '9476da38-1ffb-45a7-b108-0e6a77053cca',
              name: 'Effective Investing for the Long Term - Intentionality at Systems Levels',
              types: [PDF_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1BUwh-bfPInP1kn7o5WyRemqfHtiqgVjw/view?usp=sharing'
            }
          ]
        },
        {
          id: '3290e77e-1fa2-472d-9096-07375770fe8d',
          name: 'The Road to Context',
          types: [DIRECTORY],
          children: [
            {
              id: '1759e427-1ab8-4884-aaea-8b8d416019aa',
              name: 'The Road to Context - Directory',
              types: [GOOGLE_DRIVE],
              link: 'https://drive.google.com/drive/folders/1MPku57Qd54X45CN7uQBv0Of4MFOL4y3_?usp=sharing',
            },
            {
              id: '176357f6-d4f9-4a53-b74e-d17918959ece',
              name: 'The Road to Context',
              types: [PDF_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1gzA97ZVw63Aeu0MaXfWqLlayxbnAHBSQ/view?usp=sharing'
            }
          ]
        },
        {
          id: '0161e0b9-f50c-4b37-910f-e34f6f9dd9b0',
          name: 'Value in the Commons Economy',
          types: [DIRECTORY],
          children: [
            {
              id: '217ceb8d-8419-4f0c-8958-9d7327b926d6',
              name: 'Value in the Commons Economy - Directory',
              types: [GOOGLE_DRIVE],
              link: 'https://drive.google.com/drive/folders/1pj18O3kdDU28fzAY2rdgIYZWzFvlr5b0?usp=sharing',
            },
            {
              id: 'ddfe991d-a9ad-47d9-b7d6-a99f9f4d3c38',
              name: 'Value in the Commons Economy',
              types: [PDF_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/15e18NQRbDM5EZyv5RG1lxWUGt_Dt_58v/view?usp=sharing'
            },
            {
              id: 'ee126ac8-9ba6-4f76-8142-977a21ac6c28',
              name: 'Value in the Commons Economy - Notes',
              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1VyPRmoI-6hMy-cdYCJkatGurs4bgQ8XM/view?usp=sharing'
            },
            {
              id: 'be733cd3-ae24-4c69-b96a-c7aaa94903e6',
              name: 'Value in the Commons Economy - Condensed Notes',
              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1wQTAMFiQYP-7Hm1D62REc7Pe2-fqk5Pf/view?usp=sharing'
            }
          ]
        },
      ]
    },
    {
      id: '4e17bdad-65ac-4aad-9ba1-51a297322294',
      name: 'Peer To Peer Foundation',
      types: [DIRECTORY],
      children: [
        {
          id: 'e4860341-324e-49a8-a71c-b66fe46639db',
          name: 'P2P Foundation - Directory',
          types: [GOOGLE_DRIVE],
          link: 'https://drive.google.com/drive/folders/1vWpreYFSkfECR7OPNFaTS0sYsEXVWjPm?usp=sharing'
        },
        {
          id: 'ab500edb-5ddc-4a40-bed3-fd26cdf1e06c',
          name: 'Commons Transition - Key Terms',
          types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
          link: 'https://drive.google.com/file/d/1YIwdf826o8RFeTpBVdXKXSdDHa3ho12S/view?usp=sharing'
        },
        {
          id: 'e23125a6-2f97-4367-9319-cd8cc5425f32',
          name: 'Short Articles',
          types: [DIRECTORY],
          children: [
            {
              id: '7ad6f1e0-1f21-49a7-8321-64938bb9e40c',
              name: 'Short Articles - Directory',
              types: [GOOGLE_DRIVE],
              link: 'https://drive.google.com/drive/folders/192Pvc_sNAoQ0L_GwyZ9ri69nk5IyO7CB?usp=sharing'
            },
            {
              id: 'bac3a078-4040-4d62-b582-0e3dc9a94fb7',
              name: '1.1 - What is a Commons Transition? - Notes',
              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1Nxiza00SpSuPNlrk-QT1uphqwRushEJO/view?usp=sharing'
            },
            {
              id: 'eefef592-3885-4e2f-a3de-c721b2d66525',
              name: '1.2 - What are P2P and the Commons, and How do They Relate? - Notes',
              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1qwNzUBq9A5z6ieQLSRt4bOLiLIisuojz/view?usp=sharing',
            },
            {
              id: '9078f58b-619b-4c0b-bbee-9889522e6ec8',
              name: '1.3 - What Does a P2P Economy Look Like? - Notes',
              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1IkzIe3ZqOlA8jpFo2_LTLDUmJnYqpa5J/view?usp=sharing'
            },
            {
              id: 'a3dc25e0-ebed-4a04-9976-410f511541d4',
              name: '1.4 - What Is Distributed Manufacturing? - Notes',
              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1Wo7SMbMhNWcU_Kg82KGxpEGS2DJKT3Of/view?usp=sharing'
            },
            {
              id: '067ddb49-e624-4ddf-b569-ffb41107cffa',
              name: '1.5 - What is Open Cooperativism? - Notes',
              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1Op8BxkrpqqRyAtNogHLqd1zr1Y1lcm59/view?usp=sharing'
            },
            {
              id: '70292973-6794-4ee6-a2aa-1ccb4556e967',
              name: '1.6 - What Are P2P Politics? - Notes',
              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1vRATnuQ-XSBEBupa6v7g8FVC6Zdn2qg9/view?usp=sharing'
            },
            {
              id: '2dfb580b-1ea6-468b-af76-d2eb346c84c5',
              name: 'Commons Transition - How Do We Get There? - Notes',
              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1Mbp3aCxIR5BEGZd728rmd3IDjt3g6d8K/view?usp=sharing'
            },
            {
              id: '418946d4-15d6-4319-86d5-4d427e2a6288',
              name: '1.8 - How CAn I Take Part in a Commons Transition? - Notes',
              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1gMuIhp1Ht7R4KS-ZKK4I07v38I7nSDno/view?usp=sharing'
            },
          ]
        },
        {
          id: '23a68336-1c54-451e-bd73-8f2424da55ac',
          name: 'Long Articles',
          types: [DIRECTORY],
          children: [
            {
              id: '96653564-c77b-45d4-8b52-2f4cd49ff3ef',
              name: 'Long Articles - Directory',
              types: [GOOGLE_DRIVE],
              link: 'https://drive.google.com/drive/folders/1_x7BzSn4dxkcyILBbZtyRr8JTKsSp1w8?usp=sharing'
            },
            {
              id: '0264a371-1f8c-48e5-a8ee-9739592cdee9',
              name: '2.1 - Blueprint for a Partner State - Notes',
              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1OaPmaEptim7ar6mvIoTKb3LtDp5mICVy/view?usp=sharing'
            },
            {
              id: 'a1de70d3-a24f-4a7c-8cf1-612a4609e1aa',
              name: '2.2 - 10 Ways To Accelerate the P2P and Commons Economy - Notes',
              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1-rYvEQxAVCc2LiePRe4H9C_rI7CiGBCz/view?usp=sharing'
            },
            {
              id: '21ed4250-6a5d-43a2-ad11-2f655174ab46',
              name: '2.3 - From Platform to Open Cooperativism - Notes',
              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1g0RUWgJjQlM9RixnznvI2P-11lqj1wpz/view?usp=sharing'
            },
            {
              id: '3a7ba2fe-c3f1-4637-9456-8bc8e91a292f',
              name: '2.4 - Design Global, Manufacture Local: A New Industrial Revolution? - Notes',
              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1UHYX-ReifEesf-B_VRhB5LHiJCGWyRhn/view?usp=sharing'
            },
            {
              id: 'c60f8b73-c0c6-45ff-845c-f4ba4099ee5d',
              name: '2.5 - Commons in the Time of Monsters - Notes',
              types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
              link: 'https://drive.google.com/file/d/1Y_yxm5ZIfP-d3EfwSVcjPeY1raGkVUmf/view?usp=sharing'
            },
          ]
        },
        {
          id: 'a965861d-91e7-4c2c-a498-d258ead5fa7d',
          name: 'Papers',
          types: [DIRECTORY],
          children: [
            {
              id: '46c05339-6cbc-43c8-bd5a-008f9ea24864',
              name: 'Papers - Directory',
              types: [GOOGLE_DRIVE],
              link: 'https://drive.google.com/drive/folders/1cU3_8-1WK1zw7j6GI_1s5NpO4NlVnkkc?usp=sharing'
            },
            {
              id: 'fbe12624-4c11-4cda-9ff6-98c188718c7f',
              name: 'Accounting for Planetary Survival',
              types: [DIRECTORY],
              children: [
                {
                  id: '4cef12a3-c79d-448e-974e-fe85113d956b',
                  name: 'Accounting for Planetary Survival - Directory',
                  types: [GOOGLE_DRIVE],
                  link: 'https://drive.google.com/drive/folders/1c__qQbpodsgw7sYHL2EXzVuxSjMFqoP7?usp=sharing',
                },
                {
                  id: '91681e3b-d086-4aca-a2a5-1d4a64d111d6',
                  name: 'Accounting for Planetary Survival',
                  types: [PDF_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1mo33rs9Lbk1dhNIVOU0vI8XLD_MDpOyH/view?usp=sharing'
                },
                {
                  id: '73131432-da6f-4fb0-9932-389c6f6fc37d',
                  name: 'Accounting for Planetary Survival - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1-yfxEXjFmBYD4wVByd_SS0ZZ5JhHiBXc/view?usp=sharing'
                }
              ]
            }
          ]
        },
      ]
    },
    {
      id: '0392e8e5-d259-4574-985a-1e2425c73c80',
      name: 'R3.0',
      types: [DIRECTORY],
      children: [
        {
          id: 'c53a1e15-271f-4e19-84e7-09fe4013721d',
          name: 'R3.0 - Directory',
          types: [GOOGLE_DRIVE],
          link: 'https://drive.google.com/drive/folders/1exaevAPUXSja1KoGI6c8Nrg7kmyaROR6?usp=sharing'
        },
        {
          id: 'ce061b81-7a30-4ade-939a-a8d7790c49e0',
          name: 'R3.0 - Information Brochure',
          types: [PDF_FILE, DOCUMENT_FILE],
          link: 'https://drive.google.com/file/d/1i-p1r8MdzPPRoQNISufhLpPGKKXVKKeS/view?usp=sharing'
        },
        {
          id: 'cb4820c6-a700-499c-ae18-a608e68beedc',
          name: 'Blueprints',
          types: [DIRECTORY],
          children: [
            {
              id: '1d6a03f8-3105-4f3e-af90-55db375f4729',
              name: 'Blueprints - Directory',
              types: [GOOGLE_DRIVE],
              link: 'https://drive.google.com/drive/folders/1hNP19dMM2tf_aLuT_naDBFvWzxOplSAd?usp=sharing'
            },
            {
              id: '14578126-f349-4930-b628-af38f6f95ab2',
              name: 'Top Level Blueprints Explainer',
              types: [DIRECTORY],
              children: [
                {
                  id: 'b351440f-fcba-4fb4-8252-11f356418de9',
                  name: 'Top Level Blueprints Explainer - Directory',
                  types: [GOOGLE_DRIVE],
                  link: 'https://drive.google.com/drive/folders/18XvqtB8l6PICsnyvUkLbrDTotQY7QFzm?usp=sharing'
                },
                {
                  id: '3a073a8c-3a71-45e9-820b-d275dcd60dba',
                  name: 'Top Level Blueprints Explainer - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1UJ_3DdFH4YgDV9NYvtwQPzlBLUUOz_8q/view?usp=sharing'
                },
                {
                  id: '5cc3612a-61ab-402f-b980-2d8fbdd23df7',
                  name: 'Top Level Blueprints Explainer - Abridged Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1K0EOvoYD-rTuoS3Gph-4QdOdLLJFKxpw/view?usp=sharing'
                },
                {
                  id: 'a171a69a-0564-4e18-ab97-2e3ebf04a7a0',
                  name: 'Top Level Blueprints Explainer - Slides',
                  types: [POWERPOINT_FILE, SLIDES_FILE],
                  link: 'https://drive.google.com/file/d/13R-e10u9kVeOOicrdgCf9v64YFe4VpUs/view?usp=sharing'
                },
                {
                  id: '39953ee3-d1b5-4969-aed9-ad279f966a3f',
                  name: 'Top Level Blueprints Explainer - Abridged Slides',
                  types: [POWERPOINT_FILE, SLIDES_FILE],
                  link: 'https://drive.google.com/file/d/1XdxajTdkalQT9M39Y0J132VVWjd-iP2n/view?usp=sharing'
                }
              ]
            },
            {
              id: '32206fc1-ed13-4c63-9fb4-8c0aea0d2f85',
              name: 'Executive Summaries',
              types: [DIRECTORY],
              children: [
                {
                  id: '23a92dad-1b7c-4fe8-8d21-368a1f33ce3c',
                  name: 'Executive Summaries - Directory',
                  types: [GOOGLE_DRIVE],
                  link: 'https://drive.google.com/drive/folders/1gYzOrPMytCJn4XpwB8BYorfoiGUD_gUn?usp=sharing'
                },
                {
                  id: 'ed5dd6c9-6142-4160-94a7-653e5db1439f',
                  name: 'Executive Summaries - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1meXS3ZzynjOSmWGvlAy9QEZfAOKtvszZ/view?usp=sharing',
                },
                {
                  id: '2c2e3e2f-7a54-4eff-bc80-1dced5439cbb',
                  name: 'Executive Summaries - Slides',
                  types: [POWERPOINT_FILE, SLIDES_FILE],
                  link: 'https://drive.google.com/file/d/1xdLTfaZxZUPM0WUJmET3mmMdHPOZOveh/view?usp=sharing'
                }
              ]
            },
            {
              id: '794650f1-4bcc-4c2b-9b25-e034fa325ef7',
              name: 'Original Modules - Gabriel Bourget',
              types: [DIRECTORY],
              children: [
                {
                  id: 'a7a51292-37a9-4875-8498-0f3aa684c577',
                  name: 'Original Modules - Gabriel Bourget - Directory',
                  types: [GOOGLE_DRIVE],
                  link: 'https://drive.google.com/drive/folders/1AEVq9B1Vm6wLM9EydY9ZWm4YHMuJq2Sy?usp=sharing'
                },
                {
                  id: '316b77bb-d1eb-4267-a4ad-31323b88ab47',
                  name: 'Additional Materials',
                  types: [DIRECTORY],
                  children: [
                    {
                      id: '1d620058-3896-42a8-8d33-d7977ffb858c',
                      name: 'Additional Materials - Directory',
                      types: [GOOGLE_DRIVE],
                      link: 'https://drive.google.com/drive/folders/1h8EaVkiqMM22oI_wcXcI51ku8GqLm16_?usp=sharing'
                    },
                    {
                      id: 'c46cc266-24c6-4906-9c26-7098e96f2d07',
                      name: 'Additional Materials - Color',
                      types: [JPG_FILE, IMAGE_FILE],
                      link: 'https://drive.google.com/file/d/1SA8zZbmIhHUDwLGEq6LpV9RabMu8-Z-A/view?usp=sharing',
                    },
                    {
                      id: '3dc8ca11-acb0-476a-98e2-22b33a1c7af3',
                      name: 'Additional Materials - Color',
                      types: [IMAGE_FILE, SVG_FILE],
                      link: 'https://drive.google.com/file/d/183NwTONYpTrG-JlTLlZI80KibLZ1PuiI/view?usp=sharing',
                    },
                    {
                      id: 'e6a5e269-4709-416f-ab0a-4fc8358dc3a3',
                      name: 'Additional Materials - B&W',
                      types: [JPG_FILE, IMAGE_FILE],
                      link: 'https://drive.google.com/file/d/1qBaJQieHDGcB9PdTatSb9iouTp6FtrKb/view?usp=sharing'
                    },
                    {
                      id: 'bcb9a03b-c377-4a2a-9e1d-f6b954961081',
                      name: 'Additional Materials - B&W',
                      types: [IMAGE_FILE, SVG_FILE],
                      link: 'https://drive.google.com/file/d/181BcW4JhbEdGDrDXk8A8rEiq6y4hQh-k/view?usp=sharing'
                    }
                  ]
                },
                {
                  id: '9f32a513-04c8-4b0d-acc0-d536bec0f734',
                  name: 'Blueprint Progression',
                  types: [DIRECTORY],
                  children: [
                    {
                      id: 'f9f72d05-935a-42c1-8040-2660ca945d13',
                      name: 'Blueprint Progression - Directory',
                      types: [GOOGLE_DRIVE],
                      link: 'https://drive.google.com/drive/folders/1Ozg8Fuv-dF3k-7JAUnWGMAJMmeV1odI8?usp=sharing'
                    },
                    {
                      id: '44577830-8a20-4942-b952-92f317c53f73',
                      name: 'Blueprint Progression - Color',
                      types: [JPG_FILE, IMAGE_FILE],
                      link: 'https://drive.google.com/file/d/1vsolv0tqeILOJ9aUAJTVBEwHHDbDqh5c/view?usp=sharing'
                    },
                    {
                      id: '3cff1bba-9c86-48df-bddf-4781f65d9c4e',
                      name: 'Blueprint Progression - Color',
                      types: [IMAGE_FILE, SVG_FILE],
                      link: 'https://drive.google.com/file/d/1KTSxRq4F5rIQse74jSZV676L4504MhWz/view?usp=sharing'
                    },
                    {
                      id: '07f7b81e-9687-4f1a-b1ba-2e6e033fe326',
                      name: 'Blueprint Progression - B&W',
                      types: [JPG_FILE, IMAGE_FILE],
                      link: 'https://drive.google.com/file/d/1J-egNnaDxGzGqw5SOgsoaTvlCnB54BiC/view?usp=sharing'
                    },
                    {
                      id: 'e6f72fa4-c77c-41a8-a21d-4b6278625534',
                      name: 'Blueprint Progression - B&W',
                      types: [IMAGE_FILE, SVG_FILE],
                      link: 'https://drive.google.com/file/d/1P5hW0mbDxY1W9a45SCuWq0BwP3IV2ICI/view?usp=sharing'
                    }
                  ]
                },
                {
                  id: '040caccc-3e79-4c8f-bb58-2ec63f29774f',
                  name: 'Doughnut Economics',
                  types: [DIRECTORY],
                  children: [
                    {
                      id: 'b60390df-b581-49f5-927d-1111905c3d94',
                      name: 'Doughnut Economics - Directory',
                      types: [GOOGLE_DRIVE],
                      link: 'https://drive.google.com/drive/folders/1e_kRJzIG-rD4WX_wj70uwSju4FghiJJa?usp=sharing'
                    },
                    {
                      id: 'd5dab915-1891-4ffb-b3cb-2fe0580f4f38',
                      name: 'Simple Doughnut',
                      types: [DIRECTORY],
                      children: [
                        {
                          id: 'fd7fdddb-b229-49f0-a5ea-db92e9bba2c3',
                          name: 'Simple Doughnut - Directory',
                          types: [GOOGLE_DRIVE],
                          link: 'https://drive.google.com/drive/folders/1RmY1Q6ay1CVxlIdjp4SRIJGzz9UMrvhO?usp=sharing'
                        },
                        {
                          id: '8a00f5d1-57ab-4dcc-a2f9-0595854458ba',
                          name: 'Simple Doughnut',
                          types: [JPG_FILE, IMAGE_FILE],
                          link: 'https://drive.google.com/file/d/1MBJJ5PcwwighWX6xEPKELV3WCs4Nq7d3/view?usp=sharing'
                        },
                        {
                          id: '03d91e92-39fe-4ca6-8db1-bf99100d7bba',
                          name: 'Simple Doughnut',
                          types: [IMAGE_FILE, SVG_FILE],
                          link: 'https://drive.google.com/file/d/19AGcNmRAbnalyWGtPX5chvhpfcdR3zvp/view?usp=sharing'
                        }
                      ]
                    },
                    {
                      id: '22a37a37-de95-400c-bf50-69a4d355f786',
                      name: 'Standard Doughnut',
                      types: [DIRECTORY],
                      children: [
                        {
                          id: 'ae3b2bd1-94a7-4a71-bddc-c3dde1aeee0d',
                          name: 'Standard Doughnut - Directory',
                          types: [GOOGLE_DRIVE],
                          link: 'https://drive.google.com/drive/folders/1USDf2xMNpdyWzdfrnLSQIRMgL9CN_fai?usp=sharing'
                        },
                        {
                          id: '7f2deec6-5a1f-40ea-8830-f761ed23fd38',
                          name: 'Standard Doughnut',
                          types: [JPG_FILE, IMAGE_FILE],
                          link: 'https://drive.google.com/file/d/1MBJJ5PcwwighWX6xEPKELV3WCs4Nq7d3/view?usp=sharing'
                        },
                        {
                          id: '8cebcfb7-1f97-4eb5-ab79-394dbed520fa',
                          name: 'Standard Doughnut',
                          types: [IMAGE_FILE, SVG_FILE],
                          link: 'https://drive.google.com/file/d/19AGcNmRAbnalyWGtPX5chvhpfcdR3zvp/view?usp=sharing'
                        }
                      ]
                    },
                  ]
                },
                {
                  id: 'd4d597ff-c817-4ee9-b389-fdc7282398a9',
                  name: 'R3.0 Analyzed Institutions',
                  types: [DIRECTORY],
                  children: [
                    {
                      id: '71fb1e22-203a-4495-8a50-3a532e30add7',
                      name: 'R3.0 Analyzed Institutions - Directory',
                      types: [GOOGLE_DRIVE],
                      link: 'https://drive.google.com/drive/folders/1M8h8gSWVxamXwuF4_yG6XRQceQEsEH4A?usp=sharing'
                    },
                    {
                      id: '1a28b52a-8d47-4051-97df-4b7c7cc56220',
                      name: 'R3.0 Analyzed Institutions',
                      types: [JPG_FILE, IMAGE_FILE],
                      link: 'https://drive.google.com/file/d/1VMYzyrxD0ZCvr2euF97-O30ZbOmgjAV5/view?usp=sharing',
                    },
                    {
                      id: '9ebaf331-5489-4d89-86b3-08b6a90fe62d',
                      name: 'R3.0 Analyzed Institutions',
                      types: [IMAGE_FILE, SVG_FILE],
                      link: 'https://drive.google.com/file/d/1t9p1yNo6PkEXNw9dDqXjZblSUqgOLTql/view?usp=sharing'
                    }
                  ]
                },
              ]
            },
            {
              id: 'ec5bae80-af42-4642-bdd1-4ee5ec1b6dd8',
              name: 'BP I - Reporting',
              types: [DIRECTORY],
              children: [
                {
                  id: 'e186cc11-419d-4384-bba1-7444f9d6a400',
                  name: 'BP I - Reporting - Directory',
                  types: [GOOGLE_DRIVE],
                  link: 'https://drive.google.com/drive/folders/1KaTNXTLLjaP2AjBdj-pDQH-SAMrlKNd2?usp=sharing'
                },
                {
                  id: 'e74f367a-152d-450e-b15c-a592f2915daa',
                  name: 'BP I - Reporting',
                  types: [PDF_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1fF-ZZ0W45BqgrUwmZIx6yhdk9EFWDoM9/view?usp=sharing'
                },
                {
                  id: '13f006cb-aee0-4bb3-a537-87ca045c68b3',
                  name: 'Notes',
                  types: [DIRECTORY],
                  children: [
                    {
                      id: '9f577c42-48c6-4d43-bfce-3aa1945c4adf',
                      name: 'Notes - Directory',
                      types: [GOOGLE_DRIVE],
                      link: 'https://drive.google.com/file/d/1fF-ZZ0W45BqgrUwmZIx6yhdk9EFWDoM9/view?usp=sharing'
                    },
                    {
                      id: '29927ba2-313b-470d-9d8b-1235ebe5da87',
                      name: 'BP I - Reporting - Notes',
                      types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                      link: 'https://drive.google.com/file/d/1HbcEFz7jUdMxkRXH4KkAbkgcgtibzmrr/view?usp=sharing'
                    },
                    {
                      id: '635876b4-f022-4b1d-bfb7-6b8f99261468',
                      name: 'BP I - Reporting - Abridged Notes',
                      types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                      link: 'https://drive.google.com/file/d/1w_FLMSlZPcly6t9Moar15AwcIHK0ZcTC/view?usp=sharing'
                    }
                  ]
                },
                {
                  id: '3076b9fd-7bf5-483c-abb2-c03414cb53ba',
                  name: 'Slides',
                  types: [DIRECTORY],
                  children: [
                    {
                      id: '7825f792-955b-4a4e-b47c-e72a80731dfd',
                      name: 'Slides - Directory',
                      types: [GOOGLE_DRIVE],
                      link: 'https://drive.google.com/drive/folders/1x5DHgHEGZlmibBejgNIzQQ2r85pkKZJ7?usp=sharing'
                    },
                    {
                      id: '8bed7bd3-c839-476e-a2af-985349ccc859',
                      name: 'Full Slides',
                      types: [DIRECTORY],
                      children: [
                        {
                          id: 'c47dfc5d-60e7-46ad-8bda-d883921dac84',
                          name: 'Full Slides - Directory',
                          types: [GOOGLE_DRIVE],
                          link: 'https://drive.google.com/drive/folders/1AdrbtxqKhwB1Dd-gUfi6ne11KyUIEYt0?usp=sharing'
                        },
                        {
                          id: '9f5ba46e-8b69-41c3-a3ce-b1227c5a3ba9',
                          name: 'BP I - C1 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1G4BErfR56-v5p8cK4-gG2rDBLfBt9a8M/view?usp=sharing'
                        },
                        {
                          id: '998addbe-964e-4e58-ac8d-666ecc711c3b',
                          name: 'BP I - C2 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1gBPEVyUmRwdD4K7WyaPHzvAMhhQU3fvR/view?usp=sharing'
                        },
                        {
                          id: '5df88357-182e-4a5b-bbb5-bff3fcda72fd',
                          name: 'BP I - C3 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/19tnT0etWb-36-oMKP-L__7SCtD-w3PZp/view?usp=sharing'
                        },
                        {
                          id: '3ed756ba-5023-4e2c-8a97-81bf7ef2550e',
                          name: 'BP I - C4 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/17scfcgVITPP-tzRX_7uJMRmcrIzoOAdD/view?usp=sharing'
                        },
                        {
                          id: 'bde848d5-251a-4200-ae03-304fd0dbdb77',
                          name: 'BP I - C5 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1-LrJmbQ6_YcMoFjT5c6GH6WUTN62EU3U/view?usp=sharing'
                        },
                        {
                          id: 'cf71e29e-3593-4809-a8da-736e99888113',
                          name: 'BP I - C6 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1IJq6b657XlyJH_ZzK05mOSBrE7Go7XOE/view?usp=sharing'
                        },
                        {
                          id: 'ceb77a78-05b7-43e2-9c05-766b1ee1fe95',
                          name: 'BP I - C7 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1nthgzdlvSLfiBp-SNcwmrSEtcs8jVmaC/view?usp=sharing'
                        },
                      ]
                    },
                    {
                      id: '68b0e26a-5f2b-4880-a02b-24f9628130c4',
                      name: 'Abridged Slides',
                      types: [DIRECTORY],
                      children: [
                        {
                          id: '744b3019-d6c4-4646-ad30-04f968f1044a',
                          name: 'Abridged Slides - Directory',
                          types: [GOOGLE_DRIVE],
                          link: 'https://drive.google.com/drive/folders/1aVnmH8-zNz8HtlylJt9tLYefLTeXcuGL?usp=sharing'
                        },
                        {
                          id: '8ff755c8-8948-4368-bc40-121c2ac5abdf',
                          name: 'BP I - C1 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1nJY41N9srwwfEstcE0OTo_9e45-YZ-ui/view?usp=sharing',
                        },
                        {
                          id: '9fc7769b-0838-4a5a-a5e7-fad78328ef7d',
                          name: 'BP I - C2 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1dfRQT-8i2JxQPV29-AePpr93S6oxnJxf/view?usp=sharing',
                        },
                        {
                          id: '5733a822-d86a-406f-a882-357ac0edcb8a',
                          name: 'BP I - C3 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/12qkQ1rW-TioOhFsE_WfwG1aWNEQUKkoa/view?usp=sharing',
                        },
                        {
                          id: 'd18ddb20-bf6b-467d-bd0d-50fd1a5acfa1',
                          name: 'BP I - C4 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1RcP95ffp4HGzIAsBJvdKUbARMt4pWme9/view?usp=sharing',
                        },
                        {
                          id: 'fae0234d-431a-433e-9e60-1e2d28cc3987',
                          name: 'BP I - C5 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1zM9V-Ded3DkR7e6uUyH9q15lcPHt7csF/view?usp=sharing',
                        },
                        {
                          id: 'eaa6888c-981d-49f2-b916-c23da32f8b63',
                          name: 'BP I - C6 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1WtXyVtKUpdB3xDqUXJCn09SbU9GZ03te/view?usp=sharing',
                        },
                        {
                          id: '4d663edb-e0c1-4dd8-8236-0db3e93fa60a',
                          name: 'BP I - C7 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1Zq7cqWLRCvlf2OqE-FbXeXkvHCe8_E2h/view?usp=sharing',
                        },                        
                      ]
                    },
                  ]
                },
              ]
            },
            {
              id: 'c5f506a9-bea7-4510-a21b-77022ddcf145',
              name: 'BP II - Accounting',
              types: [DIRECTORY],
              children: [
                {
                  id: '444ed041-3db5-46a2-a9a2-11d661d2eddf',
                  name: 'BP II - Accounting - Directory',
                  types: [GOOGLE_DRIVE],
                  link: 'https://drive.google.com/drive/folders/1qKcTL46TcgP6CUz8UJ8qTmb4LXmphr9N?usp=sharing'
                },
                {
                  id: '4ce7b835-78bc-44d7-978e-b3fecb977d73',
                  name: 'BP II - Accounting',
                  types: [PDF_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1VAMCt63m1Kzp87MmW1aOtqISC9PiiA5_/view?usp=sharing'
                },
                {
                  id: '7852ddcb-4e8b-47dd-8c7c-d98360fb4c83',
                  name: 'Notes',
                  types: [DIRECTORY],
                  children: [
                    {
                      id: '29cde2e3-d05e-4f8a-8e93-6b8cfb096bf9',
                      name: 'Notes - Directory',
                      types: [GOOGLE_DRIVE],
                      link: 'https://drive.google.com/drive/folders/1zWUsjf0KIkSPhFoMUBdIG8b0FU16tH_m?usp=sharing'
                    },
                    {
                      id: 'ced14ac3-791f-4923-9a51-077c687bcaa6',
                      name: 'BP II - Accounting - Notes',
                      types: [PDF_FILE, DOCUMENT_FILE],
                      link: 'https://drive.google.com/file/d/1Pl_ZWYBDNerTUSVMDmRp2OjZkMVgqPha/view?usp=sharing'
                    },
                    {
                      id: '00cc6366-06e0-4c9d-96ac-277e6e8bf834',
                      name: 'BP II - Accounting - Abridged Notes',
                      types: [PDF_FILE, DOCUMENT_FILE],
                      link: 'https://drive.google.com/file/d/1WahZIJCTpjUYwqqemQvrUpFRRj2jVWd2/view?usp=sharing',
                    }
                  ]
                },
                {
                  id: '5e42bc42-c9bc-4c95-887a-afe95e617566',
                  name: 'Slides',
                  types: [DIRECTORY],
                  children: [
                    {
                      id: '26e4914f-f58b-41e9-8da4-b3b558c695fc',
                      name: 'Slides - Directory',
                      types: [GOOGLE_DRIVE],
                      link: 'https://drive.google.com/drive/folders/1XWja2auzVNHaekSaaM87UybBzH9dmCAM?usp=sharing'
                    },
                    {
                      id: 'c145cc47-ca84-4c5b-aac2-b179f17f1469',
                      name: 'Full Slides',
                      types: [DIRECTORY],
                      children: [
                        {
                          id: '7fabd066-e559-48e3-8bc5-f69461af7fbd',
                          name: 'Full Slides - Directory',
                          types: [GOOGLE_DRIVE],
                          link: 'https://drive.google.com/drive/folders/15zkH9gkFW0ImGcb77YtQqzMkCZLtIRXR?usp=sharing '
                        },
                        {
                          id: 'd48c4c26-594a-4c67-ac66-98eff827f402',
                          name: 'BP II - C0 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1_t8Ti5T4Yu9OSmYurcIObvK83GUYwvGI/view?usp=sharing'
                        },
                        {
                          id: '85f88b06-3fae-49bb-a4e4-08b55fa8ee6f',
                          name: 'BP II - C1 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1gaF_-CH-YFolDQAWcvOF2zSpFmgPbKaL/view?usp=sharing'
                        },
                        {
                          id: 'd735938f-7c26-44de-8d1e-e97a67236dbd',
                          name: 'BP II - C2 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1TT8Mj8QRkkPcai8Q4M7JEkrcsMQvimBP/view?usp=sharing'
                        },
                        {
                          id: 'f275e3f8-45fd-409e-a896-2e7fdff2c73d',
                          name: 'BP II - C3 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/17RPGMfFgPk_ljx1ZEQ7_HNxt6vLtmEDK/view?usp=sharing'
                        },
                        {
                          id: '7220c3d9-d11c-4e76-8ad3-46dffa5c7089',
                          name: 'BP II - C4 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1dRtfVKTy6NmEbhlIYe_pZGd1k778It96/view?usp=sharing'
                        },
                        {
                          id: 'f5cbf8c2-2781-496e-b8cf-1a134cf30e44',
                          name: 'BP II - C5 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1e_4p88SXFWBQErltDgxldXCTC91IHtIQ/view?usp=sharing'
                        },
                        {
                          id: '4e4fb9b9-5642-4b61-88ec-6768216c7942',
                          name: 'BP II - C6 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1whxvPQlbC0c2iwcTjnY2F9MK8j1UTptr/view?usp=sharing'
                        },
                        {
                          id: '202473f2-ac0e-4656-8ae2-4e02b5e0eb5a',
                          name: 'BP II - C7 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1F_VX1RjgakL9rwmZhGYmpz4CzseAm6Kb/view?usp=sharing'
                        },
                      ]
                    },
                    {
                      id: 'fdc580dd-37dc-4544-abd3-495d7718a40b',
                      name: 'Abridged Slides',
                      types: [DIRECTORY],
                      children: [
                        {
                          id: 'e53cd5fd-451b-40f1-b5c1-437e4d9187b0',
                          name: 'Abridged Slides - Directory',
                          types: [GOOGLE_DRIVE],
                          link: 'https://drive.google.com/drive/folders/1slxja4XakCnqtIWw6veFmVULzcnKHyj6?usp=sharing'
                        },
                        {
                          id: '979dd651-680a-4522-9a3d-c0eb07ce11f1',
                          name: 'BP II - C0 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1UH1g_VwhohHfW1F-6s5JL5OrYZSvw67s/view?usp=sharing'
                        },
                        {
                          id: '212bb584-d977-41bc-9759-987a9d815715',
                          name: 'BP II - C1 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1t286ttSkrVRVAa_nd-K0PzMlL8wmNnXb/view?usp=sharing'
                        },
                        {
                          id: '8863d56b-ae27-4f05-a713-8d678470dfa4',
                          name: 'BP II - C2 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1jWN9O1Wowp8L2VafIk_j--dj3aKM1YHN/view?usp=sharing'
                        },
                        {
                          id: '96b6cd30-b052-40e6-ad4e-a6bfa9c322e7',
                          name: 'BP II - C3 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1PE9b9VaTtFq_RGrPPhunu3pKD7lkQJdA/view?usp=sharing'
                        },
                        {
                          id: '000fa546-ac8c-42be-b34b-0063aa9f5894',
                          name: 'BP II - C4 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1ntVafkSr0objqTNmyTtN4sTm-doEf22s/view?usp=sharing'
                        },
                        {
                          id: 'd2f4acdf-4460-4513-b862-350ee3312714',
                          name: 'BP II - C5 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/19uAG0CaUH9uJhK-suxXnbvZyU6NFC0mg/view?usp=sharing'
                        },
                        {
                          id: 'cf9dfcfc-5707-40f7-bd40-b2dcbc24b64e',
                          name: 'BP II - C6 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1cFM0CSKvm7MqurWG4E1FrenEgLkxuMbW/view?usp=sharing'
                        },
                        {
                          id: '50898c0c-6d4d-410b-b232-764795533230',
                          name: 'BP II - C7 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1WOEYiq6BhS5AkZanQ1j6fz0FdOd83GSf/view?usp=sharing'
                        },
                      ]
                    },
                  ]
                },
              ]
            },
            {
              id: '2c6c00b0-f8a9-473d-9208-703e417645ca',
              name: 'BP III - Data Systems',
              types: [DIRECTORY],
              children: [
                {
                  id: '3ee2c014-783f-4fd9-ad01-ee602597877b',
                  name: 'BP III - Data Systems - Directory',
                  types: [GOOGLE_DRIVE],
                  link: 'https://drive.google.com/drive/folders/13i35uzXH3VYMnexTO-hJxAscrlQXRT9Q?usp=sharing'
                },
                {
                  id: 'f27fd675-2199-438c-9e91-e72fb7303e26',
                  name: 'BP III - Data Systems',
                  types: [PDF_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1AVl1HM8pcynuY_tMRlt9zfOLdhKi5Kbp/view?usp=sharing'
                },
                {
                  id: 'b0de35a5-54ca-47e7-a2e4-e43b9e049560',
                  name: 'Notes',
                  types: [DIRECTORY],
                  children: [
                    {
                      id: '3615fe38-dda8-42e8-8226-2f46d79952ce',
                      name: 'Notes - Directory',
                      types: [GOOGLE_DRIVE],
                      link: 'https://drive.google.com/drive/folders/1aIVRLGkyNKAhwcrygzsKZcXURT7CAXFy?usp=sharing'
                    },
                    {
                      id: '9d2ac872-c170-4240-99c0-f7bc2db5360a',
                      name: 'BP III - Notes',
                      types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                      link: 'https://drive.google.com/file/d/1EKPw7R2YtomHhHDPVgoisS_iu2JDs8l0/view?usp=sharing'
                    },
                    {
                      id: 'fef4f8a3-a16b-4dcd-97cb-df4ef7d1aa3f',
                      name: 'BP III - Abridged Notes',
                      types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                      link: 'https://drive.google.com/file/d/17j-ayC9nsOBKNox9hpiy1bPVD9neSG3J/view?usp=sharing'
                    },
                  ]
                },
                {
                  id: '9ea6646a-cf67-4238-841f-0a1643239927',
                  name: 'Slides',
                  types: [DIRECTORY],
                  children: [
                    {
                      id: '98ba06bd-294e-49d4-a4b9-1fd428e4a1e9',
                      name: 'Slides - Directory',
                      types: [GOOGLE_DRIVE],
                      link: 'https://drive.google.com/drive/folders/1TOUQ9o77W1pnG8UF_6F264EYVQuCS_c1?usp=sharing'
                    },
                    {
                      id: 'f0172963-4b91-4e3a-9128-032ba871207c',
                      name: 'Full Slides',
                      types: [DIRECTORY],
                      children: [
                        {
                          id: 'a8facab2-c0fc-4fed-a2d1-75d95fba4957',
                          name: 'Full Slides - Directory',
                          types: [GOOGLE_DRIVE],
                          link: 'https://drive.google.com/drive/folders/19rSM890TrYALcnt9TvBJJ7ovWS43O6YX?usp=sharing',
                        },
                        {
                          id: '2aa7da48-b2ad-43b9-86a3-5b6310f8888f',
                          name: 'BP III - C1 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/18vM4QOJjxYAQI0jTAEWdn_ptU8yONwSg/view?usp=sharing'
                        },
                        {
                          id: '1bc6ac48-1014-427d-8d15-e0b37e87be78',
                          name: 'BP III - C2 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1gETDpTN1xpu5471YijRTbB3a5ZfLxP3d/view?usp=sharing'
                        },
                        {
                          id: 'eecf6dc7-24cc-45f1-9899-fd70dee796c9',
                          name: 'BP III - C3 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1VThda6Kb9KZEZDtzMEkIArbau3gaw82r/view?usp=sharing'
                        },
                        {
                          id: '91d931c4-b430-4401-b6ce-d10a7f9bc57d',
                          name: 'BP III - C4 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1vL9KIKETl5Xujs73cTP_e7XMPloUR9Ix/view?usp=sharing'
                        },
                        {
                          id: 'a8c197be-38f2-404c-be56-69f86847e8c8',
                          name: 'BP III - C5 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1rhIDyOSp_FCq0OjlGjeI-wt0PdhSuA0v/view?usp=sharing'
                        },
                        {
                          id: '2bd4b49e-1e67-43c4-83a9-d3288bb49088',
                          name: 'BP III - C6 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1Mrv0H_1a5fOEqog-F7QxT1R7UfTvPqXf/view?usp=sharing'
                        },
                        {
                          id: '675852f4-597d-43af-a042-4d5b8dd4b77d',
                          name: 'BP III - C7 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1WaMwszGclISkhe3SDBgbznEyNXRJUQ0U/view?usp=sharing'
                        },
                      ]
                    },
                    {
                      id: '4a473ec1-f901-4d5c-af48-e9091add9093',
                      name: 'Abridged Slides',
                      types: [DIRECTORY],
                      children: [
                        {
                          id: '23080bfa-215b-4855-998b-043d95857409',
                          name: 'Abridged Slides - Directory',
                          types: [GOOGLE_DRIVE],
                          link: 'https://drive.google.com/drive/folders/18pVlKDlCmPjgM6YDFQFe8p4-XXmsCvUa?usp=sharing',
                        },
                        {
                          id: '34343fe9-4d21-40f2-a349-ef6d6a097a44',
                          name: 'BP III - C1 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: ''
                        },
                        {
                          id: '95ab1133-d431-493f-b179-99a444cab1db',
                          name: 'BP III - C2 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: ''
                        },
                        {
                          id: '813b958b-8ba3-4403-9f53-ff2549072ac3',
                          name: 'BP III - C3 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: ''
                        },
                        {
                          id: '42c935b0-9943-4aa1-b363-15ba7847bc07',
                          name: 'BP III - C4 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: ''
                        },
                        {
                          id: 'daf01240-b55a-4500-b370-d6e2b51e47a0',
                          name: 'BP III - C5 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: ''
                        },
                        {
                          id: '7ad4ee76-58bc-4082-9116-faee3c814f44',
                          name: 'BP III - C6 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: ''
                        },
                        {
                          id: '15599267-4401-495b-a39a-d8f4f188634d',
                          name: 'BP III - C7 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: ''
                        },
                      ]
                    },
                  ]
                },
              ]
            },
            {
              id: 'e16c1c9a-0fe2-4608-921f-126dc389819d',
              name: 'BP IV - New Business Models',
              types: [DIRECTORY],
              children: [
                {
                  id: '549d254e-9f04-4170-90e8-9a5f212e1e70',
                  name: 'BP IV - New Business Models - Directory',
                  types: [GOOGLE_DRIVE],
                  link: 'https://drive.google.com/drive/folders/1Qww41cy3l3uRJib1wXlUJkqGc95P1vN0?usp=sharing'
                },
                {
                  id: '06661188-a473-42ad-bfca-8771d3195d91',
                  name: 'BP IV - New Business Models',
                  types: [PDF_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1ZhaBo8bQwWwVKAbj6DO-ILXfA4d-jway/view?usp=sharing'
                },
                {
                  id: '1b9b4f42-b2fa-45de-9847-2809b290076f',
                  name: 'Notes',
                  types: [DIRECTORY],
                  children: [
                    {
                      id: '0da7df61-e2c9-49a9-b5e2-763867492667',
                      name: 'Notes - Directory',
                      types: [GOOGLE_DRIVE],
                      link: ''
                    }
                  ]
                },
                {
                  id: '7d73598c-57dc-46ee-b6ac-20a88d297df8',
                  name: 'Slides',
                  types: [DIRECTORY],
                  children: [
                    {
                      id: 'b31f41e1-4a2d-49bf-bfd3-754a73820147',
                      name: 'Slides - Directory',
                      types: [GOOGLE_DRIVE],
                      link: 'https://drive.google.com/drive/folders/1SYXNmUCTeGM4mXnTXsV9qtL3GpoJ0f6H?usp=sharing'
                    },
                    {
                      id: 'eadeb15e-aba0-4546-bc01-20a527dad2ed',
                      name: 'Full Slides',
                      types: [DIRECTORY],
                      children: [
                        {
                          id: 'b97b1537-fb5d-4bc5-bd2c-1754661af691',
                          name: 'Full Slides - Directory',
                          types: [GOOGLE_DRIVE],
                          link: 'https://drive.google.com/drive/folders/1KO8bh2MHNqMSIWIM7rwiYzW5OJeuQCHx?usp=sharing'
                        },
                        {
                          id: 'c1a7fe47-6e59-4252-a582-4187e5b87169',
                          name: 'BP IV - C1 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1SVjwpMqUkcZ6l2z63NWNpmdGyO-N3DAq/view?usp=sharing'
                        },
                        {
                          id: '63f58ad5-1f67-4c34-a1c3-d5c790082c79',
                          name: 'BP IV - C2 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1DuCPil8ijB2T1t39gjx_NgE1FrqfPFEq/view?usp=sharing'
                        },
                        {
                          id: 'f285cefe-b9a2-4742-b92d-52e8cb0bf653',
                          name: 'BP IV - C3 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1UWvLqCL5WPC3Mwm5OuFipib9WYVGoQDP/view?usp=sharing'
                        },
                        {
                          id: 'c0355861-1110-4f7e-b2de-d78f9cfc62b5',
                          name: 'BP IV - C4 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1c78lnJp8ao2s4SH1o0uOpIGdT6y6pyjV/view?usp=sharing'
                        },
                        {
                          id: 'd7158cb0-e430-469d-9052-cd8b9ebc8af4',
                          name: 'BP IV - C5 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1wWroLcbBcCgIcQfCC-cBtlOa5ozU06_e/view?usp=sharing'
                        },
                        {
                          id: '606b6526-8b4a-4ece-83fd-d8107be64ce1',
                          name: 'BP IV - C6 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1RBEr2Egg5wuekz4vn997D6G_06rze_Y7/view?usp=sharing'
                        },
                        {
                          id: 'a71337f8-a139-4919-aaf6-fb2ccdeb34d3',
                          name: 'BP IV - C8 - Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: 'https://drive.google.com/file/d/1kiCmwRs2mLK4XV3I_rrjOrKRkdNKXSC1/view?usp=sharing'
                        },
                      ]
                    },
                    {
                      id: '61df6a12-ff20-4422-8c65-5ba7419bc7c5',
                      name: 'Abridged Slides',
                      types: [DIRECTORY],
                      children: [
                        {
                          id: '5e2a9c07-b58c-4475-a1bf-65499f5b2c95',
                          name: 'Abridged Slides - Directory',
                          types: [GOOGLE_DRIVE],
                          link: ''
                        },
                        {
                          id: '4413c749-b249-4389-a8ba-7ef212421580',
                          name: 'BP IV - C1 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: ''
                        },
                        {
                          id: 'a254ca65-3202-40e7-ba33-c61ca190ef30',
                          name: 'BP IV - C2 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: ''
                        },
                        {
                          id: '3ac7196a-a43c-4253-ba6b-44524161149c',
                          name: 'BP IV - C3 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: ''
                        },
                        {
                          id: 'e3b45555-1c8b-4120-9ff5-632a46f906a2',
                          name: 'BP IV - C4 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: ''
                        },
                        {
                          id: '60c13bad-154c-47b3-b04b-c18617415a2c',
                          name: 'BP IV - C5 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: ''
                        },
                        {
                          id: 'a8e36316-64ad-423e-94b2-3f79235fe2aa',
                          name: 'BP IV - C6 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: ''
                        },
                        {
                          id: '5d49e8bf-285b-43fa-979d-633b4dbb9e09',
                          name: 'BP IV - C8 - Abridged Slides',
                          types: [POWERPOINT_FILE, SLIDES_FILE],
                          link: ''
                        },
                      ]
                    },
                  ]
                },
              ]
            },
            {
              id: '95d525bb-f418-4bc4-b479-b455810e7503',
              name: 'BP V - The Transformation Journey',
              types: [DIRECTORY],
              children: [
                {
                  id: '56e700ab-393f-4022-a53c-dcc9cc177528',
                  name: 'BP V - The Transformation Journey - Directory',
                  types: [GOOGLE_DRIVE],
                  link: 'https://drive.google.com/drive/folders/1p0x42DiwC7kGVTvLpDWWz_sZx3f7f7U6?usp=sharing'
                },
                {
                  id: '5b90381b-58a2-4287-8fd3-de8717fed8d0',
                  name: 'BP V - The Transformation Journey',
                  types: [PDF_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1nonQ1IXXgUI7weZG-lJddpiglMK8o2TA/view?usp=sharing'
                },
                {
                  id: '3a8d3006-6cb2-4844-98b7-ff76b2963f7a',
                  name: 'Notes',
                  types: [DIRECTORY],
                  children: [
                    {
                      id: 'b87e8bc4-c09e-4f23-9332-6342cbd2effe',
                      name: 'Notes - Directory',
                      types: [GOOGLE_DRIVE],
                      link: 'https://drive.google.com/drive/folders/1MvJz8fCeHjWqY-wpxVmEskiWQj_smrvL?usp=sharing'
                    },
                    {
                      id: '4699adbd-8dbe-4025-9ab5-6c5a5e1e40c9',
                      name: 'BP V - Notes',
                      types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                      link: 'https://drive.google.com/file/d/1IWWnDjvkaEhgF-xxBjkcSj4hXWkRPeLj/view?usp=sharing'
                    }
                  ]
                },
                {
                  id: '5eed344d-7f7c-45c0-870f-c2407ef6d994',
                  name: 'Slides',
                  types: [DIRECTORY],
                  children: [
                    {
                      id: 'c3f018e1-5323-4d29-99a1-ca1780eb21e6',
                      name: 'Slides - Directory',
                      types: [GOOGLE_DRIVE],
                      link: 'https://drive.google.com/drive/folders/1o_oLQ9_BSVIDS6PSz804s3uB8G0KXfCh?usp=sharing'
                    },
                    {
                      id: 'b2ee286d-5cc8-4019-93fc-7d1876dd3c38',
                      name: 'BP V - C0 - Slides',
                      types: [POWERPOINT_FILE, SLIDES_FILE],
                      link: 'https://drive.google.com/file/d/1X-9Goj9Sl1ua5BY-iJYnH0oefby1KZD0/view?usp=sharing'
                    },
                    {
                      id: '36a35cc8-67ff-4c7b-9932-f38ce6ad6f06',
                      name: 'BP V - C1 - Slides',
                      types: [POWERPOINT_FILE, SLIDES_FILE],
                      link: 'https://drive.google.com/file/d/1QRi7F8esF1qzI1En4xFq_0asOKGP0o2y/view?usp=sharing'
                    },
                    {
                      id: 'cf527e82-bcb5-4155-8fd9-ddbe0375e993',
                      name: 'BP V - C2 - Slides',
                      types: [POWERPOINT_FILE, SLIDES_FILE],
                      link: 'https://drive.google.com/file/d/1mVq5OOSz456YjleCqxvnfMldfug2Szry/view?usp=sharing'
                    },
                    {
                      id: '34dfdf9a-ced4-45c4-8e48-5321ff50c44d',
                      name: 'BP V - C3 - Slides',
                      types: [POWERPOINT_FILE, SLIDES_FILE],
                      link: 'https://drive.google.com/file/d/1MNdUnYOstYvM3Qo6vCXJ1jRitApPdvcY/view?usp=sharing'
                    },
                    {
                      id: 'e2c14213-40a6-45e2-be4e-8959a31a0643',
                      name: 'BP V - C4 - Slides',
                      types: [POWERPOINT_FILE, SLIDES_FILE],
                      link: 'https://drive.google.com/file/d/1qqM0kpnTDEJSRzH7Cibty5_BjEaSOBjA/view?usp=sharing'
                    },
                    {
                      id: 'bcb6d25d-e9a6-4497-83cf-7de9494cad37',
                      name: 'BP V - C5 - Slides',
                      types: [POWERPOINT_FILE, SLIDES_FILE],
                      link: 'https://drive.google.com/file/d/1LFIRuLULBAHibs6YtbQydY1FOnVenp7P/view?usp=sharing'
                    },
                    {
                      id: '8ed97bab-8fd2-4990-a435-a875ffeccdeb',
                      name: 'BP V - C6 - Slides',
                      types: [POWERPOINT_FILE, SLIDES_FILE],
                      link: 'https://drive.google.com/file/d/1DNCpbLoCIwtf0CP9pibKptud5VBDZdLO/view?usp=sharing'
                    },
                  ]
                },
              ]
            },
          ]
        }
      ]
    },
    {
      id: '8f3dc9fa-0938-43db-8d2e-e11578ec60f3',
      name: 'Systems Innovation',
      types: [DIRECTORY],
      children: [
        {
          id: '1a311595-75a2-42b3-a7be-86e124f5898e',
          name: 'Systems Innovation - Directory',
          types: [GOOGLE_DRIVE],
          link: 'https://drive.google.com/drive/folders/112pFbM8rwFARUV7AZQc9y8aXeFeqIO8F?usp=sharing'
        },
        {
          id: '06bcbf25-403b-43bc-ba44-17ccbd35c088',
          name: 'Courses',
          types: [DIRECTORY],
          children: [
            {
              id: 'e775a51f-a8d7-4059-b551-2ca5c475bedb',
              name: 'Courses - Directory',
              types: [GOOGLE_DRIVE],
              link: 'https://drive.google.com/drive/folders/17g8zZ4zL5bPynmPC5GGZwVLMVB24XcBt?usp=sharing'
            },
            {
              id: '4782437e-21f3-40df-bc3f-aed6ef7c5337',
              name: 'Political Complexity',
              types: [DIRECTORY],
              children: [
                {
                  id: '9d8dcfb0-dd85-4f5b-85e8-af840345917c',
                  name: 'Political Complexity - Directory',
                  types: [GOOGLE_DRIVE],
                  link: 'https://drive.google.com/drive/folders/1rxaS9ogWpODF8GI-Z613-XvqamVImQnV?usp=sharing'
                },
                {
                  id: 'f0f4da12-35d7-45c7-b442-6d81d8d75d5f',
                  name: 'Course Intro - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1VgNBZyWeidaOJQAdWhN0DdQkLcmcGXro/view?usp=sharing'
                }
              ]
            },
            {
              id: 'd12c1a84-aa55-47cf-a61b-a3a09a1609ab',
              name: 'Social Complexity',
              types: [DIRECTORY],
              children: [
                {
                  id: '323d9a1a-8f1d-4347-944a-a9aa3f5dbcbc',
                  name: 'Social Complexity - Directory',
                  types: [GOOGLE_DRIVE],
                  link: 'https://drive.google.com/drive/folders/1NALyuFz1F0pXw1aGtKl0I4HLf4fwDYWp?usp=sharing'
                },
                {
                  id: '0b8e1684-9b9b-4a2e-b964-efc34f82e817',
                  name: '01- Course Intro - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1lHyaICdCioTPvtGuZCXfX2_N29b94QeF/view?usp=sharing',
                },
                {
                  id: '9dcf45df-b647-4428-b463-7a1436601b3e',
                  name: '02 - Social Complexity Overview - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1w-pLt_ozCzh3KR8Q9uNox2Rf0BRHR3bU/view?usp=sharing',
                },
                {
                  id: '74bfd780-2663-42a2-93a6-5428e0183e92',
                  name: '03 - Social Systems - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/13PfUdC_SFiTG75LcZIV8JdrX2327t6KL/view?usp=sharing',
                },
                {
                  id: '0ecf2f25-832f-4e0c-a26a-c3cd821ae455',
                  name: '04 - Social Institutions - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1IYUK_6d5g6tEYDIUszRFkGukEZnImDxJ/view?usp=sharing',
                },
                {
                  id: '22202486-07bb-43d5-9049-7c99e931c3af',
                  name: '05 - Social Institutional Functions - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1pSd1mD4Psouv2XZMjiZQSEUnb7cKL-9l/view?usp=sharing',
                },
                {
                  id: 'b0214d86-7e82-464f-9e91-4999fcbb893d',
                  name: '06 - Social Structure - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1endUi9zkuqvJX_d0C6ootBjZLcssd4xi/view?usp=sharing',
                },
                {
                  id: '5615504d-33ba-47e4-8d4c-742ec6c4550b',
                  name: '07 - Social Self Organization - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1nu1ovd_IhoHhpqNJZZMOW-Jxxwug-Ncb/view?usp=sharing',
                },
                {
                  id: 'b646efd2-08e1-4214-811e-5dcdecca8273',
                  name: '08 - Social Feedback Loops - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1fWXAB_Sc0Jaqj0lazn7DVFBUg8ROLqDb/view?usp=sharing',
                },
                {
                  id: 'c22e995c-5747-45f7-8a1d-ef9f3870b042',
                  name: '09 - Social Attractors and Chaos - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1Bgaom605b9leA0CPrxpU_qkDXdPytieX/view?usp=sharing',
                },
                {
                  id: 'b1ddcd62-6f03-484a-8762-a6f796f32699',
                  name: '10 - Social Dynamics - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1pNZuZEXANS8KrQ6EByVAwBej_NMod8ZT/view?usp=sharing',
                },
                {
                  id: 'ba8c35f8-d474-4cde-9763-2bf25463d2d8',
                  name: '11 - Social Network Science - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1hXYt1699mOKnkAdamNZWXmRzyLbE7Q12/view?usp=sharing',
                },
                {
                  id: '20255ac6-08a3-458e-84ba-e51f781ece34',
                  name: '12 - Community Structure - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1DpPKTJrcZmG3GnVdMI38A_rnFXoEIzUv/view?usp=sharing',
                },
                {
                  id: 'c96b8aa4-1b0c-4a2d-9ff8-24b991bbb3d2',
                  name: '13 - Social Network Structure - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1oPj0s3fMVBGoFCGWO4q9JgjHowEeaRn1/view?usp=sharing',
                },
                {
                  id: 'bcec2899-656d-4abc-85e9-74f56b52fb6c',
                  name: '14 - Social Network Diffusion - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1WA9nsdbFu9h9wu9R13GvYn5gNdgProtu/view?usp=sharing',
                },
                {
                  id: '0a9d37aa-69c3-4899-8578-bee47107c14a',
                  name: '15 - Complex Adaptive Systems - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/19yoAHMlToJskXw0T0ZuhHKd6Zpwm3Oo_/view?usp=sharing',
                },
                {
                  id: 'e15b18ef-5e90-4c4f-b1c1-b40dd212a7e0',
                  name: '16 - Social Systems Adaptive Capacity - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1iXlpG84Yfn4cud0XfoIIn94qt4hD9Y3q/view?usp=sharing',
                },
                {
                  id: 'fb6dc7f4-4868-4c5a-ba0d-3fb3695984f9',
                  name: '17 - Social Systems Evolution - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/1EcfPbtkX_25WHi0EsaydzmEdlcdXQogV/view?usp=sharing',
                },
              ]
            },
          ]
        },
        {
          id: '81f3b7be-3760-4958-9121-de113fb23ab0',
          name: 'Papers',
          types: [DIRECTORY],
          children: [
            {
              id: 'e092763f-0c28-4224-9360-5fc79a7053ce',
              name: 'Papers - Directory',
              types: [GOOGLE_DRIVE],
              link: 'https://drive.google.com/drive/folders/1anLiB_3drHx5s_3S_H6GY4hC4Zo5F9P9?usp=sharing'
            },
            {
              id: 'cf691093-e0d5-4751-ad3d-a3c0fec567f4',
              name: 'Understanding the Network Economy',
              types: [DIRECTORY],
              children: [
                {
                  id: '3d809357-2b0c-4198-901e-eef0a5df3f51',
                  name: 'Understanding the Network Economy - Directory',
                  types: [GOOGLE_DRIVE],
                  link: 'https://drive.google.com/drive/folders/1kn1_ML-hRcdS0476qmFT-Vl311H5aC5t?usp=sharing'
                },
                {
                  id: '027d13ee-77bc-484f-a6d7-463a16b79a4b',
                  name: 'Understanding the Network Economy',
                  types: [PDF_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/18UUMvARQC13LDxlyvGrBxDJJGsb60qoe/view?usp=sharing',
                },
                {
                  id: '6fb78407-0e3d-4a24-bbe4-54ba5674f84d',
                  name: 'Understanding the Network Economy - Notes',
                  types: [WORD_DOCUMENT_FILE, DOCUMENT_FILE],
                  link: 'https://drive.google.com/file/d/10SP6cj0WVNwq7bNoIodboZa11mLsM2To/view?usp=sharing',
                },
              ]
            }
          ]
        },
      ]
    },
  ]
};
