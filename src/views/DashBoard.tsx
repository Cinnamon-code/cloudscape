import { Alert, Box, Button, Cards, CollectionPreferences, Container, ContentLayout, Grid, GridProps, Header, Pagination, SpaceBetween, TextFilter } from "@cloudscape-design/components"

const gridDefinition: GridProps.ElementDefinition[] = [
  { colspan: 8 },
  { colspan: 4 }
]

function DashBoard() {
  return (
    <ContentLayout header={
      <SpaceBetween size="m">
        <Header variant="h1" description="GELP is an abbreviation of Gamified E-Learning Platform.">Dashboard</Header>
        {/* <Alert>Welcome to GELP.</Alert> */}
      </SpaceBetween>
    }>
      <Grid gridDefinition={gridDefinition}>
        <Container header={
          <Header variant="h1" actions={<Button variant="primary">View All</Button>} counter="4">
            Recent Courses
          </Header>
        }>
          <Cards
            // selectedItems={selectedItems}
            ariaLabels={{
              itemSelectionLabel: (e, n) => `select ${n.name}`,
              selectionGroupLabel: "Item selection"
            }}
            cardDefinition={{
              header: e => e.name,
              sections: [
                {
                  id: "description",
                  header: "Description",
                  content: e => e.description
                },
                {
                  id: "teacher",
                  header: "Teacher",
                  content: e => <Alert>{e.teacher}</Alert>
                },
              ]
            }}
            cardsPerRow={[
              { cards: 1 },
              { minWidth: 500, cards: 2 }
            ]}
            items={[
              {
                name: "Item 1",
                alt: "First",
                description: "This is the first item",
                teacher: 'Henry'

              },
              {
                name: "Item 2",
                alt: "Second",
                description: "This is the second item",
                teacher: 'Tom Smith'
              },
              {
                name: "Item 3",
                alt: "Third",
                description: "This is the third item",
                teacher: ''
              },
              {
                name: "Item 4",
                alt: "Fourth",
                description: "This is the fourth item",
                teacher: ''
              }
            ]}
            loadingText="Loading resources"
            selectionType="multi"
            trackBy="name"
            visibleSections={["description", 'teacher']}
            empty={
              <Box textAlign="center" color="inherit">
                <b>No resources</b>
                <Box
                  padding={{ bottom: "s" }}
                  variant="p"
                  color="inherit"
                >
                  No resources to display.
                </Box>
                <Button>Create resource</Button>
              </Box>
            }
          />
        </Container>
        <Container header={
          <Header variant="h1" actions={<Button variant="primary">View All</Button>}>
            Recent Courses
          </Header>
        } />
      </Grid>
    </ContentLayout>
  )
}

export default DashBoard